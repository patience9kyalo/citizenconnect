import { DbHelper } from "../Database Helpers"
import { v4 as uid } from 'uuid'
import { Views, ViewsRequest } from "../Models/viewsModel"
import { Request, Response, RequestHandler } from 'express'
import { PollQuestions, PollQuestionsRequest } from "../Models/pollQuestionsModel"
import { PollChoices } from "../Models/pollChoicesModel"
import { PollVotes, PollVotesRequest } from "../Models/pollVotesModel"
import { ExtendedRequest } from "../Middleware"
import { pollsSchema } from "../Helpers"

const dbInstance = new DbHelper()

// Controller to add a new poll question and its choices
export const addPollQuestions = async (req: PollQuestionsRequest, res: Response) => {
    try {

        // Generate a unique ID for the question
        const QuestionId = uid();

        // Extract question text and choices from the request body
        const { QuestionText, choices } = req.body;


        // Save the question to the database
        await dbInstance.exec("addPollQuestions", { QuestionId:QuestionId, QuestionText:QuestionText });

        // Create and save each choice with a unique ID
        for (const choice of choices) {
            const choiceId = uid();
            // Save each choice to the database
            await dbInstance.exec("addPollChoices", { ChoicesId:choiceId, QuestionId:QuestionId, ChoicesText:choice });
        }

        // Respond with the created question and its choices
        res.status(201).json({
            message: "Poll question added successfully.",
            question: QuestionText,
            choices: choices, // Return the choices as part of the response
        });
    } catch (error) {
        // Handle any unexpected errors
        res.status(500).json({ message: "Internal server error", error: error });
    }
};


export const getPollQuestionsWithChoices: RequestHandler = async (req: Request, res: Response) => {
    try {
        // Fetch all poll questions
        const questions = (await dbInstance.exec("getPollQuestions", {})).recordset as PollQuestions[];

        // Fetch all poll choices
        const choices = (await dbInstance.exec("getPollChoices", {})).recordset as PollChoices[];

        if (questions.length === 0) {
            return res.status(400).json({ message: "No questions found" });
        }

        // if (choices.length === 0) {
        //     return res.status(400).json({ message: "No choices found" });
        // }

        // Combine questions with their choices
        const allPolls = []

        for (let poll of questions) {
            let choiceArray: PollChoices[] = choices.filter(choices => choices.QuestionId === poll.QuestionId)

            const onePoll = {
                poll,
                choiceArray
            }
            allPolls.push(onePoll)
        }

        return res.status(200).json(allPolls)
    } catch (error) {

    }
}



// Controller to get a single poll question with its choices by QuestionId
export const getPollQuestion = async (req: Request<{ QuestionId: string }>, res: Response) => {
    try {
        const QuestionId = req.params.QuestionId; // Get the question ID from the request parameters

        // Fetch the question by ID
        const question = (await dbInstance.exec("getPollQuestion", { QuestionId })).recordset[0] as PollQuestions;

        // Fetch choices for the question by ID
        const choices = (await dbInstance.exec("getPollQuestionById", { QuestionId })).recordset as PollChoices[];

        if (question && question.QuestionId) {
            let choiceArray: PollChoices[] = choices.filter((choice) => choice.QuestionId === question.QuestionId);

            // Construct response with the question and its choices
            const onePoll = {
                question,
                choiceArray,
            };

            return res.status(200).json(onePoll); // Return the poll with a 200 status
        } else {
            return res.status(404).json({ message: "Question not found" }); // Return 404 if question is not found
        }
    } catch (error) {
        console.error("Error in getPollQuestion:", error); // Log errors for debugging
        return res.status(500).json({ message: "Something went wrong: " + error });
    }
};

export const addVote = async (req: ExtendedRequest, res: Response) => {
    try {
        const VotesId = uid(); // Generate a unique vote ID
        const { ChoicesId, QuestionId, VoteCount } = req.body;

        // Get user ID from token
        const Id = req.info?.Id;

        if (!Id) {
            return res.status(401).json({ message: "User ID is missing or unauthorized" });
        }

        // Add the vote to the database
        await dbInstance.exec("addPollVotes", { VotesId, ChoicesId, QuestionId, VoteCount, Id });

        return res.status(200).json({ message: "Vote captured successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong: " + error });
    }
}

export const getVoteByUserId = async (req: Request<{ Id: string }>, res: Response) => {
    try {
        const Id = req.params.Id;
        const result = await dbInstance.exec('getVoteByUserId', { Id: Id });
        const vote = result.recordset[0] as PollVotes;

        if (vote) {
            return res.status(200).json(vote);
        } else {
            return res.status(404).json({ message: "No vote found for the specified user" });
        }
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong: " + error });
    }
};

export const getVoteCounts = async (req: Request<{ ChoicesId: string }>, res: Response) => {
    try {
        const ChoicesId = req.params.ChoicesId;

        // if (!ChoicesId) {
        //     return res.status(400).json({ message: "ChoiceId is required" });
        // }

        const result = await dbInstance.exec('getVoteCounts', { ChoicesId: ChoicesId });
        console.log(result)

        if (result) {
            return res.status(200).json(result);
        } else {
            return res.status(404).json({ message: "No votes found for the given ChoiceId" });
        }
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong: " + error });
    }
};


import { PollChoices } from "./pollsChoices";

export interface PollQuestions {

    QuestionId:string
    QuestionText:string

}

export interface addPollQuestions{
    QuestionText:string
    choices:string[]
}

export interface AddResponse{
    message: string;
}

export interface PollWithChoices {
    poll: PollQuestions;
    choiceArray: PollChoices[];
}
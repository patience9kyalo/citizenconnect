import {Request} from "express"


export interface PollVotes {

    VotesId:string
    ChoicesId:string
    QuestionId:string
    VoteCount:string
    Id:string

}

export interface addPollVotes{
    ChoicesId:string
    QuestionId:string
    VoteCount:string
    Id:string
}

export interface PollVotesRequest extends Request {
    body:addPollVotes
}
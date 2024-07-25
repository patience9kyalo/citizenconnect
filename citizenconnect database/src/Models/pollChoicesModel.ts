import {Request} from "express"


export interface PollChoices {

    ChoicesId:string
    QuestionId:string
    ChoicesText:string

}

export interface addPollChoices{
    QuestionId:string
    ChoicesText:string
}

export interface PollChoicesRequest extends Request {
    body:addPollChoices
}
import {Request} from "express"
import { PollChoices, PollChoicesRequest } from "./pollChoicesModel";


export interface PollQuestions {

    QuestionId:string
    QuestionText:string

}

export interface addPollQuestions{
    QuestionText:string
    choices: string[]
}


export interface PollQuestionsRequest extends Request {
    body:addPollQuestions
}
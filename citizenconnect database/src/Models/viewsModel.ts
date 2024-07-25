import {Request} from "express"


export interface Views {

    viewId:string
    viewDescription:string


}

export interface addViews{
    viewDescription:string
}

export interface ViewsRequest extends Request {
    body:addViews
}
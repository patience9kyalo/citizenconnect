export interface PollVotes {

    VotesId:string
    ChoicesId:string
    QuestionId:string
    Id?:string

}

export interface addPollVotes{
    ChoicesId:string
    QuestionId:string
    Id:string
}
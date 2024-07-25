export interface PollChoices {
    ChoicesId: string;
    QuestionId: string;
    ChoicesText: string;
}

export interface addPollChoices {
    QuestionId: string;
    ChoicesText: string;
}

export interface AddResponse {
    message: string;
}

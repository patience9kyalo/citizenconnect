import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { AddResponse } from "../../Models/pollsChoices";
import { addPollQuestions, PollQuestions, PollWithChoices } from "../../Models/pollQuestions";
import { PollVotes } from "../../Models/pollVotes";

export const pollQuestionsActions = createActionGroup({

    source:'POLLS API',
    events: {

        // Action to add a new poll question
    
        'Add Poll Question': props<{question:addPollQuestions}>(), 
        'Add Poll Question Success': props<{response: AddResponse}>(), 
        'Add Poll Question Failure': props<{message: string}>(), 

        // Action to load all poll questions

        'Get Poll Questions': emptyProps(), 
        'Get Poll Questions Success': props<{question: PollWithChoices[]}>(), 
        'Get Poll Questions Failure': props<{message: string}>(), 

        // Action to add a vote
    
        'Add Vote': props<{vote: PollVotes}>(), 
        'Add Vote Success': props<{response: AddResponse}>(), 
        'Add Vote Failure': props<{message: string}>()
    }
    

})
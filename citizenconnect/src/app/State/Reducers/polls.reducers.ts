import { createReducer, on } from "@ngrx/store"
import { incidentActions } from "../Actions/incident.action"
import { PollQuestions, PollWithChoices } from "../../Models/pollQuestions"
import { pollQuestionsActions } from "../Actions/pollQuestions.actions"
import { PollVotes } from "../../Models/pollVotes"

export interface PollInterface {

    //get all polls

    poll: PollWithChoices[]
    pollError: string
    pollLoading: boolean

    //add the polls

    addPollSuccessMessage: string
    addPollErrorMessage: string
    addPollLoading: boolean
    
    //add the votes
    addVotesSuccessMessage: string
    addVotesErrorMessage: string
    addVotesLoading: boolean

    votes: PollVotes[]

}

const initialstate: PollInterface = {

    addPollErrorMessage: '',
    addPollLoading: false,
    addPollSuccessMessage: '',

    addVotesSuccessMessage: '',
    addVotesErrorMessage: '',
    addVotesLoading: false,

    poll: [],
    pollLoading: false,
    pollError: '',

    votes:[],


}

export const PollReducer = createReducer(

    initialstate,

    on(pollQuestionsActions.addPollQuestion, (state) => {

        return {

            ...state,
            addPollErrorMessage: '',
            addPollLoading: true,
            addPollSuccessMessage: '',
        }
    }),

    on(pollQuestionsActions.addPollQuestionSuccess, (state, { response }) => {

        return {

            ...state,
            addPollErrorMessage: '',
            addPollLoading: false,
            addPollSuccessMessage: response.message,
        }
    }),

    on(pollQuestionsActions.addPollQuestionFailure, (state, { message }) => {

        return {

            ...state,
            addPollErrorMessage: message,
            addPollLoading: false,
            addPollSuccessMessage: '',
        }
    }),

    on(pollQuestionsActions.addVote, (state) => {

        return {

            ...state,
            addVotesErrorMessage: '',
            addVotesLoading: true,
            addVotesSuccessMessage: '',
        }
    }),

    on(pollQuestionsActions.addVoteSuccess, (state, { response }) => {

        return {

            ...state,
            addVotesErrorMessage: '',
            addVotesLoading: false,
            addVotesSuccessMessage: response.message,
        }
    }),

    on(pollQuestionsActions.addVoteFailure, (state, { message }) => {

        return {

            ...state,
            addVotesErrorMessage: message,
            addVotesLoading: false,
            addVotesSuccessMessage: '',
        }
    }),


    on(pollQuestionsActions.getPollQuestions, (state) => {

        return {

            ...state,
            poll: [],
            pollLoading: false,
            pollError: '',

        }
    }),

    on(pollQuestionsActions.getPollQuestionsSuccess, (state, { question }) => {

        return {

            ...state,
            poll: question,
            pollLoading: false,
            pollError: '',

        }
    }),

    on(pollQuestionsActions.getPollQuestionsFailure, (state, { message }) => {

        return {

            ...state,
            poll: [],
            pollLoading: false,
            pollError: message,
        }
    })

)
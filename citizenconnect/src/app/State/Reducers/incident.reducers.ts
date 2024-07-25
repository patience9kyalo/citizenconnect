import { createReducer, on } from "@ngrx/store"
import { Incident } from "../../Models/incident"
import { incidentActions } from "../Actions/incident.action"

export interface IncidentInterface {

    // get the incident

    incidentId: string

    //get the users incident

    Id: string

    //get all incidents

    incidents: Incident[]
    incidentError: string
    incidentLoading: boolean

    //add the incidents

    addIncidentSuccessMessage: string
    addIncidentErrorMessage: string
    addIncidentLoading: boolean

}

const initialstate: IncidentInterface = {

    addIncidentErrorMessage: '',
    addIncidentLoading: false,
    addIncidentSuccessMessage: '',

    incidents: [],
    incidentLoading: false,
    incidentError: '',

    incidentId: '',
    Id: ''

}

export const incidentReducer = createReducer(

    initialstate,

    on(incidentActions.add, (state) => {

        return {

            ...state,
            addIncidentErrorMessage: '',
            addIncidentLoading: true,
            addIncidentSuccessMessage: '',
        }
    }),

    on(incidentActions.addSuccess, (state, { response }) => {

        return {

            ...state,
            addIncidentErrorMessage: '',
            addIncidentLoading: false,
            addIncidentSuccessMessage: response.message,
        }
    }),

    on(incidentActions.addFailure, (state, { message }) => {

        return {

            ...state,
            addIncidentErrorMessage: message,
            addIncidentLoading: false,
            addIncidentSuccessMessage: '',
        }
    }),

    on(incidentActions.getIncidents, (state) => {

        return {

            ...state,
            incidents: [],
            incidentLoading: false,
            incidentError: '',
        }
    }),

    on(incidentActions.getIncidentsSuccess, (state, { incidents }) => {

        return {

            ...state,
            incidents: incidents,
            incidentLoading: false,
            incidentError: '',
        }
    }),

    on(incidentActions.getIncidentsFailure, (state, { message }) => {

        return {

            ...state,
            incidents: [],
            incidentLoading: false,
            incidentError: message,
        }
    }),

    on(incidentActions.getIncident, (state, { incidentId }) => {

        return {

            ...state,
            incidentId:incidentId
        }
    }),

    on(incidentActions.getUserIncident, (state, { Id }) => {

        return {

            ...state,
            Id
        }
    }),

    
)
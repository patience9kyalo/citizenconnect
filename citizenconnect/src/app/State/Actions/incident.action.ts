import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { addIncident, AddResponse, Incident } from "../../Models/incident";

export const incidentActions = createActionGroup({

    source:'INCIDENT API',
    events:{

        'add': props<{incident: Incident}>(),
        'add success': props<{response: AddResponse}>(),
        'add failure': props<{message: string}>(),

        'get Incidents': emptyProps(),
        'get Incidents success': props<{incidents: Incident[]}>(),
        'get Incidents failure': props<{message: string}>(),

        'get Incident': props<{incidentId: string}>(),
        'get User Incident': props<{Id:string}>()

    }
    

})
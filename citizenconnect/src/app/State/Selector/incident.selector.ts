import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IncidentInterface } from "../Reducers/incident.reducers";

const incidentFeatureSelector = createFeatureSelector<IncidentInterface>('incidents')

export const incidentsSelector = createSelector(incidentFeatureSelector,(state)=> state.incidents)
export const incidentincidentIdSelector = createSelector(incidentFeatureSelector, (state) => state.incidentId)
export const incidentIdSelector = createSelector(incidentFeatureSelector, (state)=> state.Id)

export const incidentSelector = createSelector(

    incidentsSelector,
    incidentincidentIdSelector,
    (incidents, incidentId)=> incidents.find( x => x.incidentId === incidentId)

)

export const userIncidentSelector = createSelector(

    incidentsSelector,
    incidentIdSelector,
    (incidents, incidentId)=> incidents.filter( x => x.incidentId === incidentId)
    
)
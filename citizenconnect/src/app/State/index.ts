import { authInterface } from "./Reducers/auth.reducers";
import { IncidentInterface } from "./Reducers/incident.reducers";


export interface AppState{
    auth:authInterface
    incident:IncidentInterface
    
}
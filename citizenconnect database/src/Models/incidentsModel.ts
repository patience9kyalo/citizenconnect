import {Request} from "express"


export interface Incident {

    incidentId: string
    incidentLocation: string;
    incidentStatus: string;
    incidentDescription: string;
    incidentImage: string;


}

export interface addIncidents{
    incidentLocation: string;
    incidentStatus: string;
    incidentDescription: string;
    incidentImage: string;

}

export interface IncidentsRequest extends Request {
    body:addIncidents
}
export interface Incident {

  incidentId: string
  incidentLocation: string;
  incidentStatus: string;
  incidentDescription: string;
  incidentImage: string;

}

export interface addIncident {
  incidentLocation: string;
  incidentStatus: string;
  incidentDescription: string;
  incidentImage: string;
}

export interface AddResponse {
  message: string;
}
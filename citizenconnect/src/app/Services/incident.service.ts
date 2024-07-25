import { Injectable } from '@angular/core';
import { AddResponse, Incident } from '../Models/incident';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {

  // Array to store incidents
  private incidents: Incident[] = [];

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:4000/incidents';

  // Method to report an incident
  addIncident(incident: Incident): Observable<any> {

    const token = localStorage.getItem('token') as string;
    return this.http.post<Incident>(`${this.baseUrl}`, incident);

  }

  // Method to get all incidents
  getIncidents(): Observable<Incident[]> {
    const token = localStorage.getItem('token') as string;
    return this.http.get<Incident[]>(`${this.baseUrl}`);
  }


  //Method to get one incident
  getIncident(incidentId: string): Observable<Incident> {
    const token = localStorage.getItem('token') as string;
    return this.http.get<Incident>(`${this.baseUrl}/${incidentId}`);
  }


  //method to update incident
  updateIncident(incidentId: string, updatedIncident: Incident): Observable<AddResponse> {
    const token = localStorage.getItem('token') as string;
    return this.http.patch<AddResponse>(`${this.baseUrl}/${incidentId}`, updatedIncident);
  }


  //method to delete incident
  deleteIncident(incidentId: string): Observable<void> {
    const token = localStorage.getItem('token') as string;
    return this.http.delete<void>(`${this.baseUrl}/${incidentId}`);
  }



}



import { Injectable } from '@angular/core';
import { AddResponse, Views } from '../Models/views';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViewsService {

  private views: Views[] = []

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:4000/views';

  // Method to report an views
  addViews(views: Views): Observable<any> {

    const token = localStorage.getItem('token') as string;
    return this.http.post<Views>(`${this.baseUrl}`, views);

  }

  // Method to get all viewss
  getViews(): Observable<Views[]> {
    const token = localStorage.getItem('token') as string;
    return this.http.get<Views[]>(`${this.baseUrl}`);
  }


  //Method to get one views
  getView(viewsId: string): Observable<Views> {
    const token = localStorage.getItem('token') as string;
    return this.http.get<Views>(`${this.baseUrl}/${viewsId}`);
  }


  //method to update views
  updateView(viewsId: string, updatedviews: Views): Observable<AddResponse> {
    const token = localStorage.getItem('token') as string;
    return this.http.patch<AddResponse>(`${this.baseUrl}/${viewsId}`, updatedviews);
  }


  //method to delete views
  deleteView(viewsId: string): Observable<void> {
    const token = localStorage.getItem('token') as string;
    return this.http.delete<void>(`${this.baseUrl}/${viewsId}`);
  }
  
  getViewsSummary():Observable<string>{
    const summary = this.views.map(view => `${view.viewDescription}`).join('\n')
    return of(summary)
  }
}

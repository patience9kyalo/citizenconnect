import { Injectable } from '@angular/core';
import { LoginReq, LoginResponse, Payload, RegisterResponse, User } from '../Models/users';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, Observable, of, tap, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private baseUrl = 'http://localhost:4000/users';
  private userPayloadSubject = new BehaviorSubject<Payload | null>(null);

  constructor(private http: HttpClient) { }

  get userPayload$(): Observable<Payload | null> {
    return this.userPayloadSubject.asObservable();
  }

  // Method to set the payload
  private setUserPayload(payload: Payload): void {
    this.userPayloadSubject.next(payload);
  }

  getUserId(): string | null {
    const payload = this.userPayloadSubject.getValue();
    return payload ? payload.Id : null;
  }

  registerUser(user: User): Observable<RegisterResponse> {
    const token = localStorage.getItem('token') as string;
     console.log(token);
    console.log('reaching here')

    return this.http.post<RegisterResponse>(`${this.baseUrl}/register`, user)
    
  }


  loginUser(credentials: LoginReq): Observable<LoginResponse> {
    const token = localStorage.getItem('token') as string;
    console.log('Token:', token);
    return this.http.post<LoginResponse>(`${this.baseUrl}/login`, credentials);
  }

  forgotPassword(email: string): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.baseUrl}/forgot-password`, { email });
  }


  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}`);
  }

  getApprovedUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/approve/new/new`);
  }

  getNotApprovedUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/reject/new/new`);
  }

  approveUser(Id: string): Observable<void> {
    return this.http.get<void>(`${this.baseUrl}/approve/approve/${Id}`);
  }

  updateUser(Id: string, user: Partial<User>): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${Id}`, user);
  }

  deleteUser(Id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${Id}`);
  }

  rejectUser(Id: string): Observable<void> {
    return this.http.get<void>(`${this.baseUrl}/reject/reject/${Id}`);
  }
}
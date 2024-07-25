import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthstatusService {

  constructor() { }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token') as string;
    if (token) {
      return true
    }
    return false
  }
  
}

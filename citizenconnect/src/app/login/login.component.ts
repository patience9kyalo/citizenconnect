import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../State';
import { authActions } from '../State/Actions/auth.actions';
import { loginErrorSelector } from '../State/Selector/auth.selector';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm!: FormGroup
  message!: string
  error!: string


  constructor(private fb : FormBuilder, private router: Router, private as: AuthService, private store : Store<AppState>){}

  strongPassword(control: AbstractControl): ValidationErrors | null {
    let value = control.value;

    if (!value) {
      return null;
    }

    let hasUpperCase = /[A-Z]/.test(value);
    let hasLowerCase = /[a-z]/.test(value);
    let hasNumeric = /[0-9]/.test(value);
    let hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    let hasMinLength = value.length >= 8;

    let valid = hasUpperCase && hasLowerCase && hasNumeric && hasSpecialChar && hasMinLength;

    if (!valid) {
      return {
        strong: true
      };
    }
    return null;
  }

  ngOnInit(): void {
    
    this.loginForm = this.fb.group({
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(8)]] 
    })
  }


  error$ = this.store.select(loginErrorSelector)

  onsubmit(){

    this.store.dispatch(authActions.login({user:this.loginForm.value}))

  }

  ngOnDestroy(): void {
    
    console.log("Login Component Destroyed")

  }



}

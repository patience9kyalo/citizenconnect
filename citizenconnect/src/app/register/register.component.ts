import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';
import { authActions } from '../State/Actions/auth.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../State';
import { User } from '../Models/users';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  users!: User[]
  errorMessage = '';
  termsAccepted = false;

  constructor(private fb: FormBuilder, private as: AuthService, private router: Router, private store: Store<AppState>) { }

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

    this.registerForm = this.fb.group({
      Name: ['', [Validators.required]],
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(8)]],
      Role: ['', [Validators.required]],
      AcceptTerms: [false, [Validators.requiredTrue]]
    });


  }

  onSubmit(): void {


    const newPerson: User = {
      Id: this.registerForm.value.Id,
      Name: this.registerForm.value.Name,
      Email: this.registerForm.value.Email,
      Password: this.registerForm.value.Password,
      Role: this.registerForm.value.Role,
      // IsApproved: 0 
    };

    this.store.dispatch(authActions.register({ user: newPerson }));

  }





  onTermsAccepted(event: any): void {
    this.termsAccepted = event.target.checked;
  }


}

// const user = {

//   Name: this.registerForm.value.Name,
//   Email: this.registerForm.value.Email,
//   Password: this.registerForm.value.Password,
//   Role: this.registerForm.value.Role

// };

// this.as.registerUser(user).subscribe(() => {

//     this.router.navigate(['login']);
//   },
//   (error) => {
//     this.errorMessage = error.message;
//   }

// );





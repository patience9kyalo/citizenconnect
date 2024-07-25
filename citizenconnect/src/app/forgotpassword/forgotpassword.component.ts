import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forgotpassword',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './forgotpassword.component.html',
  styleUrl: './forgotpassword.component.css'
})
export class ForgotpasswordComponent {

  forgotPasswordForm!: FormGroup
  message!: string
  

  constructor(private fb : FormBuilder, private as: AuthService, private route: Router){

    this.forgotPasswordForm = this.fb.group({
      Email: ['', [Validators.required, Validators.email]]
    })
  }

  onsubmit(){

    if (this.forgotPasswordForm.invalid){
      return
    }

    const email = this.forgotPasswordForm.value.email

    this.as.forgotPassword(email).subscribe(

      response => {

        this.message = 'Passwordreset instructions send'
      },

      error => {

        this.message = 'Failed to send instructions please try again'

      }
    )
  }

}

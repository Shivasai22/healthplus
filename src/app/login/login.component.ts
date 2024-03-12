import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { validateHeaderValue } from 'http';
import { MatCard } from '@angular/material/card';
import { MatFormField } from '@angular/material/form-field';
import { MatCardTitle } from '@angular/material/card';
import { MatCardContent } from '@angular/material/card';
import { MatFormFieldControl } from '@angular/material/form-field';
import { MatButton } from '@angular/material/button';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule,MatCard,MatFormField,MatCardContent,MatCardTitle,MatButton,MatInput],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
// export class LoginComponent {
//   email =new FormControl("",[
//     Validators.required,
//     Validators.email
//   ])
//   password = new FormControl("",[
//     Validators.required,
//     Validators.minLength(6)
//   ])

//   loginForm = new FormGroup({
//     email:this.email,
//     password:this.password
//   })
//   login(){
//     console.log(this.loginForm.value)
//   }
// }
export class LoginComponent {
  loginUserForm :FormGroup;
  constructor() {
    this.loginUserForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }
    ngOnInit():void{
    }
    OnSubmit(){
      console.log(this.loginUserForm.value);
    }
  }

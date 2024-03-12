
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCard } from '@angular/material/card';
import { MatFormField } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import { MatFormFieldControl } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button'; 
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { MatHint } from '@angular/material/form-field';
import { MatCardTitle } from '@angular/material/card';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-signup',
  standalone: true,
  providers:[provideNativeDateAdapter()],
  imports: [RouterLink,ReactiveFormsModule,MatInput,MatCard,MatFormField,MatLabel,MatOption,MatButton,MatSelect,MatRadioModule,MatButtonModule,MatDatepickerModule,MatHint,MatCardTitle],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})

export class SignupComponent {
  @ViewChild('confirmedPassword',{static :false}) confirmedPassword:ElementRef | any;
  UserRegistrationForm: FormGroup; // This is the instance type

  constructor() {
    this.UserRegistrationForm = new FormGroup({ // Here we're assigning an instance of FormGroup
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
     // confirmpassword: new FormControl('', Validators.required),
      //dob: new FormControl('', Validators.required)
    });
  }
  ngOnInit():void{}
  OnSubmit(){
    if(this.UserRegistrationForm.value && this.UserRegistrationForm.value.password === this.confirmedPassword.nativeElement.value){
    console.log('user form value is',this.UserRegistrationForm.value);

    }console.log('user form value is',this.UserRegistrationForm.value);
  }   
}
export class DatepickerApi{}
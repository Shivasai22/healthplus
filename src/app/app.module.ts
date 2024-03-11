import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatCardModule} from '@angular/material/card';
import { MatCard } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { MatFormField} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    DashboardComponent,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatCard,
    MatCardModule,
    MatFormField,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule,
    BrowserModule,
     RouterModule,
    HttpClientModule,
  ]
})
export class AppModule { }


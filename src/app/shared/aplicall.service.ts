import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AplicallService {

  constructor(public http:HttpClient) { 
  }
  login(userData: any){
    return this.http.post("http://127.0.0.1:3000/auth/login",userData)
  }
  registerUser(userData:any){
    return this.http.post("http://127.0.0.1:3000/auth/login",userData)

  }
  gotoDashboard(token:any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer'+ (token)
    })
    return this.http.post("http://127.0.0.1:3000/auth/login",{headers:headers})

  }
}

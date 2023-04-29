import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { User } from "../user";
import { catchError } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class UrlsrvcService {

  serverUrl = "https://mycart-backend.onrender.com";
  // serverUrl = "http://localhost:3200"

  registerUrl = `${this.serverUrl}/register`;
  loginUrl = `${this.serverUrl}/login`;
  requestresetUrl = `${this.serverUrl}/req-reset-password`;
  validPassUrl = `${this.serverUrl}/valid-password-token`;
  newPassUrl = `${this.serverUrl}/new-password`;

  resS;

  constructor(private http:HttpClient) { }
  
  createUser(user: User): Observable<User[]> {
    return this.http.post<User[]>(this.registerUrl, user).pipe(catchError(this.errorHandler));
  }

  loginUser(user: User): Observable<User[]> {
    return this.http.post<User[]>(this.loginUrl, user).pipe(catchError(this.errorHandler));
  }
  requestReset(body:any): Observable<any[]>{
    return this.http.post<any[]>(this.requestresetUrl,body).pipe(catchError(this.errorHandler));
  }
  ValidPasswordToken(body:any): Observable<any[]>{
    return this.http.post<any[]>(this.validPassUrl,body).pipe(catchError(this.errorHandler));
  }
  newPassword(body: any): Observable<any[]> {
    return this.http.post<any[]>(this.newPassUrl, body).pipe(catchError(this.errorHandler));
  }
  
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.error.message);
  }

}

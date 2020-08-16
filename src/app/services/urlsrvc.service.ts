import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { User } from "../user";
import { catchError } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class UrlsrvcService {

  registerUrl = 'https://backend-api1.herokuapp.com/register';
  loginUrl = 'https://backend-api1.herokuapp.com/login';
  requestresetUrl = 'https://backend-api1.herokuapp.com/req-reset-password';
  validPassUrl = 'https://backend-api1.herokuapp.com/valid-password-token';
  newPassUrl = 'https://backend-api1.herokuapp.com/new-password';

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

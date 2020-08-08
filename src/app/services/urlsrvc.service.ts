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


  constructor(private http:HttpClient) { }
  
  createUser(user: User): Observable<User[]> {
    return this.http.post<User[]>(this.registerUrl, user).pipe(catchError(this.errorHandler));
  }

  loginUser(user: User): Observable<User[]> {
    return this.http.post<User[]>(this.loginUrl, user).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.error.message);
  }

}

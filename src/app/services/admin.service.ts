import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Products } from "../products";
import { User } from "../user";
import { AuthServiceService } from "./auth-service.service";


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  token = this.srvc.getToken();
  user_id = this.srvc.getUserId();
  _id: String;
  adminProductForm;
  userdelete_id;
  adminProdDelete_id;

   serverUrl = "https://mycart-backend.onrender.com";
  // serverUrl = "http://localhost:3200"
  addprodUrl = `${this.serverUrl}/addprod`;
  getprodUrl = `${this.serverUrl}/getprod`;
  getUpdateprodUrl = `${this.serverUrl}/editprod`;
  updateprodUrl = `${this.serverUrl}/updateprod`;
  deleteprodUrl = `${this.serverUrl}/deleteprod`;
  getuserUrl = `${this.serverUrl}/getuser`;
  deleteuserUrl = `${this.serverUrl}/deleteuser`;


  constructor(private http: HttpClient, private srvc: AuthServiceService) { }
  
  getProduct(): Observable<Products[]> {
    return this.http.get<Products[]>(this.getprodUrl).pipe(catchError(this.errorHandler));
  }
  addProduct(adminProductForm): Observable<Products[]> {
    return this.http.post<Products[]>(this.addprodUrl, adminProductForm).pipe(catchError(this.errorHandler));
  }
  getUpdateProduct(): Observable<Products[]> {
    return this.http.get<Products[]>(`${ this.getUpdateprodUrl }/${ this._id }`).pipe(catchError(this.errorHandler));
  }
  updateProduct(body): Observable<Products[]> {
    return this.http.patch<Products[]>(this.updateprodUrl,body).pipe(catchError(this.errorHandler));
  }
  deleteProduct(): Observable<Products[]> {
    return this.http.get<Products[]>(`${this.deleteprodUrl}/${this.adminProdDelete_id}`).pipe(catchError(this.errorHandler));
  }
  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.getuserUrl).pipe(catchError(this.errorHandler));
  }
  deleteUser(): Observable<User[]> {
    return this.http.get<User[]>(`${this.deleteuserUrl}/${this.userdelete_id}`).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message);
  }

}

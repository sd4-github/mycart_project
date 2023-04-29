import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Products } from "../products";

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  serverUrl = "https://mycart-backend.onrender.com";
  // serverUrl = "http://localhost:3200"

  productUrl =`${this.serverUrl}/getprod`;
  searchprodUrl = `${this.serverUrl}/searchprod`;
  productData=[];

  constructor(private http:HttpClient) { }

  showProduct():Observable<Products[]>{
    return this.http.get<Products[]>(this.productUrl).pipe(catchError(this.errorHandler));
  }
  searchProduct(): Observable<Products[]> {
    return this.http.get<Products[]>(this.searchprodUrl).pipe(catchError(this.errorHandler));
  }
  getproductId(): Observable<Products[]> {
    return this.http.get<Products[]>(this.productUrl).pipe(catchError(this.errorHandler));
  }
    errorHandler(error: HttpErrorResponse) {
    return throwError(error.error.message);
  }
}

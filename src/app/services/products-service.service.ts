import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Products } from "../products";

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  productUrl ="https://backend-api1.herokuapp.com/getprod";
  searchprodUrl = "https://backend-api1.herokuapp.com/searchprod";
  productData;

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

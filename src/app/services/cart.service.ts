import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Products } from "../products";
import { Cart,Order } from "../cart";
import { AuthServiceService } from "./auth-service.service";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  token = this.srvc.getToken();
  user_id = this.srvc.getUserId();
  p_id: String;
  quantity: Number;
  pname: String;
  pvalue: Number;
  pimage: String;

  showprodUrl = "https://backend-api1.herokuapp.com/showprod";
  detailsprodUrl = "https://backend-api1.herokuapp.com/detailsprod/:_id";
  showcartUrl = "https://backend-api1.herokuapp.com/showcart";
  addtocartUrl = "https://backend-api1.herokuapp.com/addtocart";
  updatecartUrl = "https://backend-api1.herokuapp.com/updatecart";
  deletecartprodUrl = "https://backend-api1.herokuapp.com/deletecartprod/:p_id";
  getcheckoutUrl = "https://backend-api1.herokuapp.com/getcheckout";
  postcheckoutUrl = "https://backend-api1.herokuapp.com/postcheckout";
  orderUrl = "https://backend-api1.herokuapp.com/order";

  constructor(private http: HttpClient,private srvc:AuthServiceService) { }

  showProduct(): Observable<Products[]> {
    return this.http.get<Products[]>(this.showprodUrl).pipe(catchError(this.errorHandler));
  }
  detailsProduct(): Observable<Products[]> {
    return this.http.get<Products[]>(this.detailsprodUrl).pipe(catchError(this.errorHandler));
  }
  showcartProduct(){
    const params = new HttpParams().append('user_id',this.user_id);
    return this.http.get(this.showcartUrl,{params:params}).pipe(catchError(this.errorHandler));
  }
  addtocartProduct(cart:Cart):Observable<Cart[]>{
    return this.http.post<Cart[]>(this.addtocartUrl, cart).pipe(catchError(this.errorHandler));
  }
  updatecartProduct(): Observable<Cart[]> {
    return this.http.get<Cart[]>(this.updatecartUrl).pipe(catchError(this.errorHandler));
  }
  deletecartProduct(): Observable<Cart[]> {
    return this.http.get<Cart[]>(this.deletecartprodUrl).pipe(catchError(this.errorHandler));
  }
  getcheckoutProduct(){
    return this.http.get(this.getcheckoutUrl).pipe(catchError(this.errorHandler));
  }
  postcheckoutProduct(cart:Cart): Observable<Cart[]> {
    return this.http.post<Cart[]>(this.postcheckoutUrl,cart).pipe(catchError(this.errorHandler));
  }
  orderProduct(): Observable<Order[]> {
    return this.http.get<Order[]>(this.orderUrl).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.error.message);
  }
}

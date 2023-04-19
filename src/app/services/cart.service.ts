import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Products } from "../products";
import { Cart } from "../cart";
import { Order } from "../order";
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
  itemDeleteId;

  showprodUrl = "http://localhost:3200/showprod";
  detailsprodUrl = "http://localhost:3200/detailsprod/:_id";
  showcartUrl = "http://localhost:3200/showcart";
  addtocartUrl = "http://localhost:3200/addtocart";
  updatecartUrl = "http://localhost:3200/updatecart";
  deletecartprodUrl = "http://localhost:3200/deletecartprod";
  getcheckoutUrl = "http://localhost:3200/getcheckout";
  postcheckoutUrl = "http://localhost:3200/postcheckout";
  orderDetailsUrl = "http://localhost:3200/order";

  constructor(private http: HttpClient,private srvc:AuthServiceService) { }

  showProduct(): Observable<Products[]> {
    return this.http.get<Products[]>(this.showprodUrl).pipe(catchError(this.errorHandler));
  }
  detailsProduct(): Observable<Products[]> {
    return this.http.get<Products[]>(this.detailsprodUrl).pipe(catchError(this.errorHandler));
  }
  showcartProduct(){
    // const params = new HttpParams().append('user_id',this.user_id);
    return this.http.get(`${this.showcartUrl}/${this.user_id}`).pipe(catchError(this.errorHandler));
  }
  addtocartProduct(cart:Cart):Observable<Cart[]>{
    return this.http.post<Cart[]>(this.addtocartUrl, cart).pipe(catchError(this.errorHandler));
  }
  updatecartProduct(): Observable<Cart[]> {
    return this.http.get<Cart[]>(this.updatecartUrl).pipe(catchError(this.errorHandler));
  }
  deletecartProduct(): Observable<Cart[]>{
    return this.http.get<Cart[]>(`${this.deletecartprodUrl}/${this.itemDeleteId}`).pipe(catchError(this.errorHandler));
  }
  getcheckoutProduct(): Observable<Cart[]>{
    return this.http.get<Cart[]>(`${this.getcheckoutUrl}/${this.user_id}`).pipe(catchError(this.errorHandler));
  }
  postcheckoutProduct(order:Order): Observable<Order[]> {
    return this.http.post<Order[]>(this.postcheckoutUrl,order).pipe(catchError(this.errorHandler));
  }
  orderDetails(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.orderDetailsUrl}/${this.user_id}`).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message);
  }
}

import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
let CartService = class CartService {
    constructor(http) {
        this.http = http;
        this.showprodUrl = "https://backend-api1.herokuapp.com/showprod";
        this.detailsprodUrl = "https://backend-api1.herokuapp.com/detailsprod/:_id";
        this.showcartUrl = "https://backend-api1.herokuapp.com/showcart";
        this.addtocartUrl = "https://backend-api1.herokuapp.com/addtocart";
        this.updatecartUrl = "https://backend-api1.herokuapp.com/updatecart";
        this.deletecartprodUrl = "https://backend-api1.herokuapp.com/deletecartprod/:p_id";
        this.getcheckoutUrl = "https://backend-api1.herokuapp.com/getcheckout";
        this.postcheckoutUrl = "https://backend-api1.herokuapp.com/postcheckout";
        this.orderUrl = "https://backend-api1.herokuapp.com/order";
    }
    showProduct() {
        return this.http.get(this.showprodUrl).pipe(catchError(this.errorHandler));
    }
    detailsProduct() {
        return this.http.get(this.detailsprodUrl).pipe(catchError(this.errorHandler));
    }
    showcartProduct(user_id) {
        return this.http.get(this.showcartUrl).pipe(catchError(this.errorHandler));
    }
    addtocartProduct(cart) {
        return this.http.post(this.addtocartUrl, cart).pipe(catchError(this.errorHandler));
    }
    updatecartProduct() {
        return this.http.get(this.updatecartUrl).pipe(catchError(this.errorHandler));
    }
    deletecartProduct() {
        return this.http.get(this.deletecartprodUrl).pipe(catchError(this.errorHandler));
    }
    getcheckoutProduct() {
        return this.http.get(this.getcheckoutUrl).pipe(catchError(this.errorHandler));
    }
    postcheckoutProduct(cart) {
        return this.http.post(this.postcheckoutUrl, cart).pipe(catchError(this.errorHandler));
    }
    orderProduct() {
        return this.http.get(this.orderUrl).pipe(catchError(this.errorHandler));
    }
    errorHandler(error) {
        return throwError(error.error.message);
    }
};
CartService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], CartService);
export { CartService };
//# sourceMappingURL=cart.service.js.map
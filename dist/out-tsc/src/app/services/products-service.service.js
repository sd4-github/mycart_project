import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
let ProductsServiceService = class ProductsServiceService {
    constructor(http) {
        this.http = http;
        this.productUrl = "https://backend-api1.herokuapp.com/getprod";
        this.searchprodUrl = "https://backend-api1.herokuapp.com/searchprod";
    }
    showProduct() {
        return this.http.get(this.productUrl).pipe(catchError(this.errorHandler));
    }
    searchProduct() {
        return this.http.get(this.searchprodUrl).pipe(catchError(this.errorHandler));
    }
    getproductId() {
        return this.http.get(this.productUrl).pipe(catchError(this.errorHandler));
    }
    errorHandler(error) {
        return throwError(error.error.message);
    }
};
ProductsServiceService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], ProductsServiceService);
export { ProductsServiceService };
//# sourceMappingURL=products-service.service.js.map
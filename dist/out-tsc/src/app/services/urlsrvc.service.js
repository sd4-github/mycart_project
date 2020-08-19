import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";
let UrlsrvcService = class UrlsrvcService {
    constructor(http) {
        this.http = http;
        this.registerUrl = 'https://backend-api1.herokuapp.com/register';
        this.loginUrl = 'https://backend-api1.herokuapp.com/login';
    }
    createUser(user) {
        return this.http.post(this.registerUrl, user).pipe(catchError(this.errorHandler));
    }
    loginUser(user) {
        return this.http.post(this.loginUrl, user).pipe(catchError(this.errorHandler));
    }
    errorHandler(error) {
        return throwError(error.error.message);
    }
};
UrlsrvcService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], UrlsrvcService);
export { UrlsrvcService };
//# sourceMappingURL=urlsrvc.service.js.map
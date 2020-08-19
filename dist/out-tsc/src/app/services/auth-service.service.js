import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let AuthServiceService = class AuthServiceService {
    constructor() { }
    setTokenWithInitialData(token, email, usertype, user_id) {
        window.sessionStorage.setItem('token', token);
        window.sessionStorage.setItem('email', email);
        window.sessionStorage.setItem('usertype', usertype);
        window.sessionStorage.setItem('user_id', user_id);
    }
    getToken() {
        return window.sessionStorage.getItem('token');
    }
    getUserId() {
        return window.sessionStorage.getItem('user_id');
    }
    getAllData() {
        const allData = [];
        allData.push(window.sessionStorage.getItem('email'), window.sessionStorage.getItem('usertype'), window.sessionStorage.getItem('user_id'));
        return allData;
    }
    destroyToken() {
        window.sessionStorage.clear();
    }
};
AuthServiceService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthServiceService);
export { AuthServiceService };
//# sourceMappingURL=auth-service.service.js.map
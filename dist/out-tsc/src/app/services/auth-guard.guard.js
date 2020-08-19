import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let AuthGuardGuard = class AuthGuardGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(next, state) {
        if (window.sessionStorage.getItem('token') != null) {
            return true;
        }
        else {
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
        }
    }
};
AuthGuardGuard = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthGuardGuard);
export { AuthGuardGuard };
//# sourceMappingURL=auth-guard.guard.js.map
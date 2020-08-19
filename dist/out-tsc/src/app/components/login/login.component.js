import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Validators } from "@angular/forms";
let LoginComponent = class LoginComponent {
    constructor(srvc, fb, router, authService, actvtdRoute) {
        this.srvc = srvc;
        this.fb = fb;
        this.router = router;
        this.authService = authService;
        this.actvtdRoute = actvtdRoute;
    }
    ngOnInit() {
        this.loginForm = this.fb.group({
            email: [null, [Validators.required]],
            password: [null, [Validators.required, Validators.maxLength(8)]],
            checkbox: [true]
        });
    }
    loginUser(loginForm) {
        let formvalue = this.loginForm.getRawValue();
        console.log(formvalue);
        this.srvc.loginUser(formvalue).subscribe(data => {
            console.log('userdetails:', data);
            this.userDetails = data;
            alert(this.userDetails.message);
            this.authService.setTokenWithInitialData(this.userDetails.token, this.userDetails.email, this.userDetails.usertype, this.userDetails.user_id);
            this.router.navigate(['dashboard']);
        });
    }
};
LoginComponent = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map
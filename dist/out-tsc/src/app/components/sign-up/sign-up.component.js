import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Validators } from "@angular/forms";
let SignUpComponent = class SignUpComponent {
    constructor(srvc, fb, router) {
        this.srvc = srvc;
        this.fb = fb;
        this.router = router;
    }
    ngOnInit() {
        this.loginForm = this.fb.group({
            firstname: [null, [Validators.required]],
            lastname: [null, [Validators.required]],
            email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
            password: [null, [Validators.required, Validators.maxLength(8)]]
        });
    }
    registerUser() {
        let formvalue = this.loginForm.getRawValue();
        console.log(formvalue);
        this.srvc.createUser(formvalue).subscribe(data => {
            // console.log(data);
            this.userDetails = data;
            alert(this.userDetails.message);
            console.log(this.userDetails.message);
            this.router.navigate(['/login']);
        }, error => {
            this.error_value = error;
            // console.log(this.error_value);
        });
    }
};
SignUpComponent = tslib_1.__decorate([
    Component({
        selector: 'app-sign-up',
        templateUrl: './sign-up.component.html',
        styleUrls: ['./sign-up.component.css']
    })
], SignUpComponent);
export { SignUpComponent };
//# sourceMappingURL=sign-up.component.js.map
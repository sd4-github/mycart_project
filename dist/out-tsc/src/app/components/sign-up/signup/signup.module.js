import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from "../sign-up.component";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';
const signupRoute = [
    { path: 'signup', component: SignUpComponent }
];
let SignupModule = class SignupModule {
};
SignupModule = tslib_1.__decorate([
    NgModule({
        declarations: [SignUpComponent],
        exports: [SignUpComponent],
        imports: [
            CommonModule,
            ReactiveFormsModule,
            RouterModule.forChild(signupRoute)
        ]
    })
], SignupModule);
export { SignupModule };
//# sourceMappingURL=signup.module.js.map
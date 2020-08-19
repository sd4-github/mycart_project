import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from "../login.component";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';
const loginRoute = [
    { path: 'login', component: LoginComponent }
];
let LoginModule = class LoginModule {
};
LoginModule = tslib_1.__decorate([
    NgModule({
        declarations: [LoginComponent],
        exports: [LoginComponent],
        imports: [
            CommonModule,
            ReactiveFormsModule,
            RouterModule.forChild(loginRoute)
        ]
    })
], LoginModule);
export { LoginModule };
//# sourceMappingURL=login.module.js.map
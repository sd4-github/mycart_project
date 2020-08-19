import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "../home.component";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';
const homeRoute = [
    { path: 'home', component: HomeComponent },
    { path: '', component: HomeComponent }
];
let HomeModule = class HomeModule {
};
HomeModule = tslib_1.__decorate([
    NgModule({
        declarations: [HomeComponent],
        exports: [HomeComponent],
        imports: [
            CommonModule,
            ReactiveFormsModule,
            RouterModule.forChild(homeRoute)
        ]
    })
], HomeModule);
export { HomeModule };
//# sourceMappingURL=home.module.js.map
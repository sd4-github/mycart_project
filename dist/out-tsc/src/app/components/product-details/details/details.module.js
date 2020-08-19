import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from "../product-details.component";
import { RouterModule } from "@angular/router";
import { AuthGuardGuard } from 'src/app/services/auth-guard.guard';
const detailsRoute = [
    { path: 'details/:id', canActivate: [AuthGuardGuard], component: ProductDetailsComponent }
];
let DetailsModule = class DetailsModule {
};
DetailsModule = tslib_1.__decorate([
    NgModule({
        declarations: [ProductDetailsComponent],
        exports: [ProductDetailsComponent],
        imports: [
            CommonModule,
            RouterModule.forChild(detailsRoute)
        ]
    })
], DetailsModule);
export { DetailsModule };
//# sourceMappingURL=details.module.js.map
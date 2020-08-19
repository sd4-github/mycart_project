import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { CartComponent } from "../cart.component";
import { AuthGuardGuard } from 'src/app/services/auth-guard.guard';
const routes = [
    { path: 'cart', canActivate: [AuthGuardGuard], component: CartComponent }
];
let CartModule = class CartModule {
};
CartModule = tslib_1.__decorate([
    NgModule({
        declarations: [CartComponent],
        exports: [CartComponent],
        imports: [
            CommonModule,
            RouterModule.forChild(routes)
        ]
    })
], CartModule);
export { CartModule };
//# sourceMappingURL=cart.module.js.map
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
const routes = [
    { path: '', loadChildren: '../components/home/home/home.module#HomeModule' },
    { path: '', loadChildren: '../components/profile/profile/profile.module#ProfileModule' },
    { path: '', loadChildren: '../components/dashboard/dashboard/dashboard.module#DashboardModule' },
    { path: '', loadChildren: '../components/sign-up/signup/signup.module#SignupModule' },
    { path: '', loadChildren: '../components/login/login/login.module#LoginModule' },
    {
        path: '',
        loadChildren: () => import('../components/cart/cart/cart.module').then(module => module.CartModule)
    },
    { path: '', loadChildren: '../components/product-details/details/details.module#DetailsModule' }
];
let RoutingModule = class RoutingModule {
};
RoutingModule = tslib_1.__decorate([
    NgModule({
        declarations: [],
        imports: [
            CommonModule,
            RouterModule.forRoot(routes)
        ],
        exports: [RouterModule]
    })
], RoutingModule);
export { RoutingModule };
//# sourceMappingURL=routing.module.js.map
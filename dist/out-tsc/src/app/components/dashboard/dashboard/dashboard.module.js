import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from "../dashboard.component";
import { RouterModule } from "@angular/router";
import { AuthGuardGuard } from 'src/app/services/auth-guard.guard';
import { NgxPaginationModule } from "ngx-pagination";
const DashboardRoute = [
    { path: 'dashboard', canActivate: [AuthGuardGuard], component: DashboardComponent }
];
let DashboardModule = class DashboardModule {
};
DashboardModule = tslib_1.__decorate([
    NgModule({
        declarations: [DashboardComponent],
        exports: [DashboardComponent],
        imports: [
            CommonModule,
            RouterModule.forChild(DashboardRoute),
            NgxPaginationModule
        ]
    })
], DashboardModule);
export { DashboardModule };
//# sourceMappingURL=dashboard.module.js.map
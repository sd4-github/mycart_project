import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { ProfileComponent } from "../profile.component";
import { AuthGuardGuard } from 'src/app/services/auth-guard.guard';
const routes = [
    { path: 'profile', canActivate: [AuthGuardGuard], component: ProfileComponent }
];
let ProfileModule = class ProfileModule {
};
ProfileModule = tslib_1.__decorate([
    NgModule({
        declarations: [ProfileComponent],
        exports: [ProfileComponent],
        imports: [
            CommonModule,
            RouterModule.forChild(routes)
        ]
    })
], ProfileModule);
export { ProfileModule };
//# sourceMappingURL=profile.module.js.map
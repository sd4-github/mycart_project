import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from "../dashboard.component";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuardGuard } from 'src/app/services/auth-guard.guard';
import { NgxPaginationModule } from "ngx-pagination";



const DashboardRoute: Routes = [
  { path: 'dashboard', canActivate: [AuthGuardGuard], component: DashboardComponent},
]


@NgModule({
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRoute),
    NgxPaginationModule
  ]
})
export class DashboardModule { }

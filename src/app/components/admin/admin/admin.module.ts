import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from "../admin.component";
import { AuthGuardGuard } from 'src/app/services/auth-guard.guard';

const routes: Routes = [
  { path: 'admin', canActivate: [AuthGuardGuard], component: AdminComponent }
]


@NgModule({
  declarations: [AdminComponent],
  exports: [AdminComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }

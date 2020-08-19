import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDeleteUserComponent } from "../admin-delete-user.component";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuardGuard } from 'src/app/services/auth-guard.guard';

const routes: Routes = [
  { path: 'admin-delete-user', canActivate: [AuthGuardGuard], component: AdminDeleteUserComponent }
]


@NgModule({
  declarations: [AdminDeleteUserComponent],
  exports: [AdminDeleteUserComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminDeleteUserModule { }

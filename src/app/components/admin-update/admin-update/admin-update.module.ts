import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminUpdateComponent } from '../admin-update.component';
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuardGuard } from 'src/app/services/auth-guard.guard';

const routes: Routes = [
  { path: 'admin-update', canActivate: [AuthGuardGuard], component: AdminUpdateComponent }
]


@NgModule({
  declarations: [AdminUpdateComponent],
  exports: [AdminUpdateComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminUpdateModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminProductComponent } from '../admin-product.component';
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuardGuard } from 'src/app/services/auth-guard.guard';

const routes: Routes = [
  { path: 'admin-product', canActivate: [AuthGuardGuard], component: AdminProductComponent }
]



@NgModule({
  declarations: [AdminProductComponent],
  exports: [AdminProductComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminProductModule { }

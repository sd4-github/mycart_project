import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from "../product-details.component";
import { Routes,RouterModule } from "@angular/router";
import { AuthGuardGuard } from 'src/app/services/auth-guard.guard';

const detailsRoute:Routes=[
  { path: 'details/:id', canActivate: [AuthGuardGuard], component: ProductDetailsComponent }
]


@NgModule({
  declarations: [ProductDetailsComponent],
  exports: [ProductDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(detailsRoute)
  ]
})
export class DetailsModule { }

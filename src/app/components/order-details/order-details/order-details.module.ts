import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDetailsComponent } from "../order-details.component";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuardGuard } from 'src/app/services/auth-guard.guard';


const orderDetailsRoute: Routes = [
  { path: 'orderdetails', canActivate: [AuthGuardGuard], component: OrderDetailsComponent}
]


@NgModule({
  declarations: [OrderDetailsComponent],
  exports: [OrderDetailsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(orderDetailsRoute)
  ]
})
export class OrderDetailsModule { }

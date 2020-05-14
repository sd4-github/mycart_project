import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { CartComponent } from "../cart.component";
import { AuthGuardGuard } from 'src/app/services/auth-guard.guard';


const routes: Routes = [
  { path: 'cart', canActivate: [AuthGuardGuard], component: CartComponent }
]


@NgModule({
  declarations: [CartComponent],
  exports: [CartComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CartModule { }

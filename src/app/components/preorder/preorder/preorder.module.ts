import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreorderComponent } from "../preorder.component";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuardGuard } from 'src/app/services/auth-guard.guard';


const preOrderRoute: Routes = [
  { path: 'preorder', canActivate: [AuthGuardGuard], component: PreorderComponent }
]


@NgModule({
  declarations: [PreorderComponent],
  exports: [PreorderComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(preOrderRoute)
  ]
})
export class PreorderModule { }

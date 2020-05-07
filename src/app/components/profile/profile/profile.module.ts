import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { ProfileComponent } from "../profile.component";
import { AuthGuardGuard } from 'src/app/services/auth-guard.guard';


const routes:Routes=[
  { path: 'profile', canActivate: [AuthGuardGuard],component: ProfileComponent}
]



@NgModule({
  declarations: [ProfileComponent],
  exports: [ProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProfileModule { }

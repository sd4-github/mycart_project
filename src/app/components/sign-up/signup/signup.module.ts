import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from "../sign-up.component";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';

const signupRoute:Routes=[
  { path: 'signup', component: SignUpComponent}
]


@NgModule({
  declarations: [SignUpComponent],
  exports: [SignUpComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(signupRoute)
  ]
})
export class SignupModule { }

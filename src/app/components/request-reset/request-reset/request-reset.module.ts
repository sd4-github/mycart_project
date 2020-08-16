import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestResetComponent } from "../request-reset.component";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';

const requestResetRoute: Routes = [
  { path: 'requestReset', component: RequestResetComponent}
]

@NgModule({
  declarations: [RequestResetComponent],
  exports: [RequestResetComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(requestResetRoute)
  ]
})
export class RequestResetModule { }


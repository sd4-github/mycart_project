import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponseResetComponent } from "../response-reset.component";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';

const responseResetRoute: Routes = [
  { path: 'resetResponse/:token', component: ResponseResetComponent }
]

@NgModule({
  declarations: [ResponseResetComponent],
  exports: [ResponseResetComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(responseResetRoute)
  ]
})
export class ResponseResetModule { }

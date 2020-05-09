import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "../home.component";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';

const homeRoute: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent }
]


@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(homeRoute)
  ]
})
export class HomeModule { }

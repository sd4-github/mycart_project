import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from "@angular/router";


const routes:Routes=[
  { path: '', loadChildren:'../components/home/home/home.module#HomeModule'},
  { path: '', loadChildren:'../components/profile/profile/profile.module#ProfileModule'},
  { path: '', loadChildren: '../components/dashboard/dashboard/dashboard.module#DashboardModule'},
  { path: '', loadChildren:'../components/sign-up/signup/signup.module#SignupModule'},
  { path: '', loadChildren:'../components/product-details/details/details.module#DetailsModule'},
  { path: '', loadChildren: '../components/login/login/login.module#LoginModule' }, //lazy loading old method
  { 
    path: '', 
    loadChildren: () => import('../components/cart/cart/cart.module').then(module => module.CartModule)
  },                                                                     //lazy loading new method
  { path: '', loadChildren: '../components/request-reset/request-reset/request-reset.module#RequestResetModule'},
  { path: '', loadChildren: '../components/response-reset/response-reset/response-reset.module#ResponseResetModule'}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class RoutingModule { }

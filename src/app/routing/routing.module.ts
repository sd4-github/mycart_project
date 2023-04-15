import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from "@angular/router";


const routes:Routes=[
  
  { path: '',
    loadChildren:() => import('../components/home/home/home.module').then(module => module.HomeModule)
  },
  { path: '',
    loadChildren:() => import('../components/profile/profile/profile.module').then(module => module.ProfileModule)
  },
  { path: '',
    loadChildren:() => import('../components/dashboard/dashboard/dashboard.module').then(module => module.DashboardModule)
  },
  { path: '', 
    loadChildren:() => import('../components/sign-up/signup/signup.module').then(module => module.SignupModule)
  },
  { path: '',
    loadChildren:() => import('../components/product-details/details/details.module').then(module => module.DetailsModule)
  },
  { path: '',
    loadChildren:() => import( '../components/login/login/login.module').then(module => module.LoginModule)
  }, 
  { 
    path: '', 
    loadChildren: () => import('../components/cart/cart/cart.module').then(module => module.CartModule)
  },
  { path: '', 
    loadChildren: () => import('../components/request-reset/request-reset/request-reset.module').then(module => module.RequestResetModule)
  },
  { path: '', 
    loadChildren: () => import('../components/response-reset/response-reset/response-reset.module').then(module => module.ResponseResetModule)
  },
  { path: '', 
    loadChildren: () => import('../components/preorder/preorder/preorder.module').then(module => module.PreorderModule)
  },
  { path: '', 
    loadChildren: () => import('../components/order-details/order-details/order-details.module').then(module => module.OrderDetailsModule)
  },
  { path: '', 
    loadChildren: () => import('../components/admin/admin/admin.module').then(module => module.AdminModule)
  },
  { path: '', 
    loadChildren: () => import('../components/admin-product/admin-product/admin-product.module').then(module => module.AdminProductModule)
  },
  { path: '', 
    loadChildren: () => import('../components/admin-update/admin-update/admin-update.module').then(module => module.AdminUpdateModule)
  },
  { path: '', 
    loadChildren: () => import('../components/admin-delete-user/admin-delete-user/admin-delete-user.module').then(module => module.AdminDeleteUserModule)
  }
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

import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthServiceService } from "src/app/services/auth-service.service";
import { Router } from '@angular/router';
import { ProductsServiceService } from 'src/app/services/products-service.service';

@Component({
  selector: 'app-my-navbar',
  templateUrl: './my-navbar.component.html',
  styleUrls: ['./my-navbar.component.css']
})
export class MyNavbarComponent implements OnInit{
  token;
  usertype;
  term; 
  productData;
  products;
  productArray


  constructor(private breakpointObserver: BreakpointObserver, private storagesrvc: AuthServiceService,private productSrvc:ProductsServiceService , private router:Router) {
    this.token=this.storagesrvc.getToken();
    this.usertype=this.storagesrvc.getUserType();
  }

  //angular material
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    
  ngOnInit(){
   
    this.productSrvc.showProduct().subscribe(data => {
      this.products = data;
      console.log(this.products);
      this.productArray = this.products.data;
      console.log(this.productArray);
      this.productSrvc.productData = this.productArray;
      console.log(this.productSrvc.productData);
      this.productData = this.productSrvc.productData;
      console.log(this.productData);
    })
    
  }
  

  onLogout() {
    this.storagesrvc.destroyToken();
    this.router.navigate(['/login']);
  }

}

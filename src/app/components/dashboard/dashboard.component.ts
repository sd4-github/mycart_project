import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductsServiceService } from 'src/app/services/products-service.service';
import { AuthServiceService } from 'src/app/services/auth-service.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  p: Number = 1;
  products:any;
  productArray:any;
  

  constructor(private router:Router, private productSrvc:ProductsServiceService, private route:ActivatedRoute) { 
   
  }
  ngOnInit() {
    this.productSrvc.showProduct().subscribe(data => {
      this.products = data;
      console.log(this.products);
      this.productArray=this.products.data;
      console.log(this.productArray);
      this.productSrvc.productData=this.productArray;
      console.log(this.productSrvc.productData);
    })
  }

}

  



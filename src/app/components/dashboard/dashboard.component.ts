import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsServiceService } from 'src/app/services/products-service.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  p: number = 1;
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

  goDetails(id){
    this.router.navigate(['details',id]);
  }

}

  



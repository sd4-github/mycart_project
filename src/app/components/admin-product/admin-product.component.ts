import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from "../../services/admin.service";



@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {

adminProduct;
productArray

  constructor(private router: Router, private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getProduct().subscribe(results=>{
      console.log(results);
      this.adminProduct = results;
      console.log(this.adminProduct);
      this.productArray = this.adminProduct.data;
      console.log(this.productArray);     
    })
  }

}

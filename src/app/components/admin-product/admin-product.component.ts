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
productArray;
adminProductDeleteId

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

  deleteProduct(id){
    console.log(id);
    this.adminService.adminProdDelete_id = id;
    console.log(this.adminService.adminProdDelete_id);
    this.adminProductDeleteId = this.adminService.adminProdDelete_id;
    console.log(this.adminProductDeleteId);
    this.adminService.deleteProduct().subscribe(deleteResult => {
      console.log(deleteResult);
    })
  }


}

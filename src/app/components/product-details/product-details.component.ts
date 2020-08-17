import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import { ProductsServiceService } from 'src/app/services/products-service.service';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {

productDetails:any;
productInfo;
  products;
  productArray
uid;
quantity;
cartP

  constructor(private route: ActivatedRoute,private authsrvc:AuthServiceService,private cartsrvc:CartService, private productSrvc:ProductsServiceService,private router:Router) {}

  ngOnInit() {
   
    console.log(this.productSrvc.productData);
    this.productInfo=this.productSrvc.productData;
    console.log(this.productInfo);
    this.route.params.subscribe(params =>{
      console.log(params);
      this.productDetails=this.productInfo.filter((data)=>{
        console.log(data._id);
        return data._id==(params.id);
      })[0];
    });
    console.log('productdetails:',this.productDetails);
    this.cartsrvc.pname=this.productDetails.pname;
    this.cartsrvc.pvalue=this.productDetails.pvalue;
    this.cartsrvc.pimage=this.productDetails.pimage;
    console.log('cpname',this.cartsrvc.pname)
    console.log('cpvalue',this.cartsrvc.pvalue)
    console.log('cimage',this.cartsrvc.pimage)
  }

  goCart(id) {
    console.log('pid:',id);
    this.cartsrvc.p_id=id;
    console.log('cpid',this.cartsrvc.p_id);
    console.log('quantity:',this.quantity);
    this.cartsrvc.quantity=this.quantity;
    console.log('cquan',this.cartsrvc.quantity);
    console.log('userId:', this.authsrvc.getUserId());
    this.uid = this.authsrvc.getUserId();
    console.log('uid',this.uid);
    console.log('token',this.authsrvc.getToken());


    //add to cart
    console.log(this.cartsrvc.p_id);
    console.log(this.cartsrvc.user_id);
    console.log(this.cartsrvc.quantity);
    let cart = {
      user_id: this.cartsrvc.user_id, p_id: this.cartsrvc.p_id, quantity: this.cartsrvc.quantity, pname: this.cartsrvc.pname, pvalue: this.cartsrvc.pvalue, pimage: this.cartsrvc.pimage
    }
    this.cartsrvc.addtocartProduct(cart).subscribe(result => {
      console.log('cartdata', result);
      this.cartP = result;
      console.log(this.cartP.data);
    })
    window.alert('Your product has been added to the cart!');
    this.router.navigate(['cart']);
   
  }
  
  
}

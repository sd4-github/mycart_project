import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartY;
  cartM;
  constructor(private cartsrvc: CartService, private router: Router) {
    this.cartsrvc.showcartProduct().subscribe(result => {
      console.log('data', result);
      this.cartY=result;
      console.log(this.cartY.data);
      this.cartM=this.cartY.data;
    })

  }
  ngOnInit() { 
  }

  deleteCartItem(p_id){
    console.log('pid',p_id);
    this.cartsrvc.deletecartProduct().subscribe(result=>{
      console.log(result);
      //below code refreshes the cart
      this.cartM = this.cartM.filter(eachItem => eachItem.p_id !== p_id);
      console.log(this.cartM);
    })
  }

  goCheckout(u){
    console.log('goCheckout:',u);
    this.router.navigate(['preorder']);
  }

}

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
  cartItemDeleteId
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
    this.cartsrvc.itemDeleteId = p_id;
    console.log(this.cartsrvc.itemDeleteId);
    this.cartItemDeleteId = this.cartsrvc.itemDeleteId;
    console.log(this.cartItemDeleteId);
    this.cartsrvc.deletecartProduct().subscribe(result=>{
      console.log(result);
    })
  }

  goCheckout(u){
    console.log('goCheckout:');
    this.router.navigate(['preorder']);
  }

}

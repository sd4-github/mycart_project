import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

export interface Transaction {
  item: string;
  cost: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart:any=[];
  quantity: number = 1;
  constructor(private cartSrvc:CartService) { }

  ngOnInit() {
    this.cart=this.cartSrvc.getItems();
    // console.log(this.cart);
  }

  increment() {
    this.quantity += 1;
  }

  decrement() {
    if (this.quantity!=1) {
      this.quantity -= 1;
    } else {
      this.quantity=1;
    }
  }

}

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
  constructor(private cartSrvc:CartService) { }

  ngOnInit() {
    this.cart=this.cartSrvc.getItems();
    // console.log(this.cart);
  }

}

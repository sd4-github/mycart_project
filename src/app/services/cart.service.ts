import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: any = [];

  constructor() { }

  addToCart(product) {
    console.log(this.cartItems[0]);
    this.cartItems.push(product);
  }

  getItems() {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
    return this.cartItems;
  }
}

import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartY;
  cartM;
  constructor(private cartsrvc:CartService) {
    this.cartsrvc.showcartProduct().subscribe(result => {
      console.log('data', result);
      this.cartY=result;
      console.log(this.cartY.data);
      this.cartM=this.cartY.data;
    })

  }
  ngOnInit() {
    
  }

}

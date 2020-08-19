import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  orderinfo;
  orderM;
  orderN;
  cartInfo;

  constructor(private router: Router, private cartSrvc: CartService) {
    this.cartSrvc.orderDetails().subscribe(result => {
      console.log(result);
      this.orderinfo=result;
      console.log(this.orderinfo.data);
      this.orderM = this.orderinfo.data;
      console.log(this.orderM);
      this.cartInfo = this.orderM.orderproduct;
      console.log(this.cartInfo);
      //before removing orderproduct array from object, duplicate copy of orderM object should be made, as delete method will delete property from objects
      this.orderN = Object.assign({}, this.orderM);
      delete this.orderN.orderproduct;
      console.log(this.orderN);
      console.log(this.orderM);

    })
   }

  ngOnInit() {
  }

}

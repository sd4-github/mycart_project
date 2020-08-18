import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-preorder',
  templateUrl: './preorder.component.html',
  styleUrls: ['./preorder.component.css']
})
export class PreorderComponent implements OnInit {
  
  orderForm: FormGroup;
  error_value;
  orderDetails;

  constructor(private router: Router, private cartSrvc: CartService, private fb: FormBuilder) {
    this.cartSrvc.getcheckoutProduct().subscribe(result => {
      console.log(result);
    })
   }

  ngOnInit() {
    this.orderForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      mobilenum: [null, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      address: [null, [Validators.required, Validators.maxLength(8)]]
    })
  }

  order() {
    let formvalue = this.orderForm.getRawValue();
    console.log(formvalue);
    let order = {
      name: formvalue.name,
      email: formvalue.email,
      mobilenum: formvalue.mobilenum,
      address: formvalue.address,
      user_id: this.cartSrvc.user_id
    }
    this.cartSrvc.postcheckoutProduct(order).subscribe(data => {
      console.log(data);
      this.orderDetails = data;
      alert(this.orderDetails.message);
      console.log(this.orderDetails.message);
      this.router.navigate(['/orderdetails']);
    }, error => {
      this.error_value = error;
      console.log(this.error_value);
    })
  }



}

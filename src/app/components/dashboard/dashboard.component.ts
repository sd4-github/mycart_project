import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  p: Number = 1;
  products: any = [
    { id: 1, name: 'Lenovo', price: '30000', image:'assets/images/Lenovo.jpeg', desc: 'Lenovo V145 15.6 inch HD Laptop'},
    { id: 2, name: 'Dell', price: '25000', image: 'assets/images/Dell.jpeg', desc:'Dell Vostro 3581 15.6-inch HD Laptop'},
    { id: 3, name: 'Hp', price: '20000', image: 'assets/images/Hp.jpeg', desc:'HP Pavilion 14-inch HD Laptop' }
    ,{ id: 4, name: 'Hp', price: '30000', image: 'assets/images/Hp.jpeg', desc:'HP Pavilion 14-inch HD Laptop' }
    ,{ id: 5, name: 'Hp', price: '40000', image: 'assets/images/Hp.jpeg', desc:'HP Pavilion 14-inch HD Laptop' }
    ,{ id: 6, name: 'Hp', price: '25000', image: 'assets/images/Hp.jpeg', desc:'HP Pavilion 14-inch HD Laptop' }
    ,{ id: 7, name: 'Hp', price: '35000', image: 'assets/images/Hp.jpeg', desc:'HP Pavilion 14-inch HD Laptop' }
    ,{ id: 8, name: 'Hp', price: '19000', image: 'assets/images/Hp.jpeg', desc:'HP Pavilion 14-inch HD Laptop' }
    ,{ id: 9, name: 'Hp', price: '21000', image: 'assets/images/Hp.jpeg', desc:'HP Pavilion 14-inch HD Laptop' }
  ]
  constructor(private router:Router, private cartSrvc:CartService, private route:ActivatedRoute) { }

  ngOnInit() {
  }
  
  goCart(product){
    this.cartSrvc.addToCart(product);
    // console.log(product);
    this.router.navigate(['cart']);
    window.alert('Your product has been added to the cart!');
  }

  

}

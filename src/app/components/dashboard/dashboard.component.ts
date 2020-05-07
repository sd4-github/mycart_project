import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


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
  constructor(private router:Router) { }

  ngOnInit() {
  }
  
  goCart(){
    this.router.navigate(['cart']);
  }

  

}

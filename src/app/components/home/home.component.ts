import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from 'src/app/services/products-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private productSrvc:ProductsServiceService) { }

  ngOnInit() {
  }

}

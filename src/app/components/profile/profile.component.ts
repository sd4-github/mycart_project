import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from "src/app/services/auth-service.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  showData;

  constructor(private authsrvc: AuthServiceService, private router:Router) { 
  }

  ngOnInit() {
    this.showData=this.authsrvc.getAllData();
    // console.log(this.showData);
  }

  onLogout(){
    this.authsrvc.destroyToken();
    this.router.navigate(['/login']);
  }

}

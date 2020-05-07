import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UrlsrvcService } from 'src/app/services/urlsrvc.service';
import { AuthServiceService } from "src/app/services/auth-service.service";
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  userDetails: any;

  constructor(private srvc: UrlsrvcService, private fb: FormBuilder, private router: Router, private authService: AuthServiceService, private actvtdRoute: ActivatedRoute) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.maxLength(8)]]
    })
  }

  loginUser(loginForm) {
    let formvalue = this.loginForm.getRawValue();
    // console.log(formvalue);
    this.srvc.loginUser(formvalue).subscribe(data => {
      // console.log(data);
      this.userDetails = data;
      alert(this.userDetails.message);
      this.authService.setTokenWithInitialData(this.userDetails.token, this.userDetails.full_name, this.userDetails.email);
      this.router.navigate(['dashboard']);
    })
  }

}

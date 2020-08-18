import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UrlsrvcService } from 'src/app/services/urlsrvc.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  loginForm: FormGroup;
  error_value;
  userDetails;

  constructor(private srvc: UrlsrvcService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      firstname: [null, [Validators.required]],
      lastname: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password: [null, [Validators.required, Validators.maxLength(8)]]
    })
  }

  registerUser() {
    let formvalue = this.loginForm.getRawValue();
    console.log(formvalue);
    this.srvc.createUser(formvalue).subscribe(data => {
      // console.log(data);
      this.userDetails = data;
      alert(this.userDetails.message);
      console.log(this.userDetails.message);
      this.router.navigate(['/login']);
    }, error => {
      this.error_value = error;
      // console.log(this.error_value);
    })
  }

}

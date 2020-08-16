import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UrlsrvcService } from 'src/app/services/urlsrvc.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-response-reset',
  templateUrl: './response-reset.component.html',
  styleUrls: ['./response-reset.component.css']
})
export class ResponseResetComponent implements OnInit {
  ResponseResetForm: FormGroup;
  errorMessage: string;
  successMessage: string;
  resetToken: null;
  CurrentState: any;
  IsResetFormValid = true;
  

  constructor(
    private authService: UrlsrvcService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder) {
    this.CurrentState = 'Wait';
    this.route.params.subscribe(params => {
      console.log('params:',params);
      this.resetToken = params.token;
      console.log(this.resetToken);
      this.VerifyToken();
    });
    }

  ngOnInit() {
    this.Init();
  }
  VerifyToken() {
    this.authService.ValidPasswordToken({ resettoken: this.resetToken }).subscribe(
      data => {
        this.CurrentState = 'Verified';
      },
      err => {
        this.CurrentState = 'NotVerified';
      }
    );
  }
  Init() {
    this.ResponseResetForm = this.fb.group(
      {
        resettoken: [this.resetToken],
        newPassword: ['', [Validators.required, Validators.minLength(4)]],
        password: ['', [Validators.required, Validators.minLength(4)]]
      }
    );
  }

  Validate(passwordFormGroup: FormGroup) {
    const new_password = passwordFormGroup.controls.newPassword.value;
    const confirm_password = passwordFormGroup.controls.password.value;

    if (confirm_password.length <= 0) {
      return null;
    }

    if (confirm_password !== new_password) {
      return {
        doesNotMatch: true
      };
    }

    return null;
  }

  ResetPassword(form) {
    console.log(form.get('password'));
    console.log(form.value.password);
    if (form.valid) {
      this.IsResetFormValid = true;
      this.authService.newPassword(form.value).subscribe(
        data => {
          console.log('data:',data);
          this.ResponseResetForm.reset();
          // this.successMessage= data.message.;
          setTimeout(() => {
            this.successMessage = null;
            this.router.navigate(['/login']);
          });
        },
        err => {
          if (err) {
            // this.errorMessage = err.error.message;
            console.log('err',err);
          }
        }
      );
    } else { this.IsResetFormValid = false; }
  }
}



import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from "../../services/admin.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private fb: FormBuilder, private adminService: AdminService, private router: Router, private route: ActivatedRoute) { }
  
  addProductForm:FormGroup;
  error_value;
  uImage:File;
  data;

  ngOnInit() {
    this.addProductForm = this.fb.group({
      pname: [null, Validators.required],
      pimage: ['', Validators.required],
      pvalue: [null, Validators.required, Validators.pattern[(" ^(?:0|[1-9]\d*)(?:\.(?!.*000)\d+)?$")]],
      pdesc: [null, Validators.required]
    })
  }

  uploadFile(event) {
    console.log(event);
    this.uImage = event.target.files[0];     //entire value is stored in files array
  }

  createProduct() {
    let formobj = this.addProductForm.getRawValue();
    console.log(formobj);

    let formData = new FormData();

    formData.append('pimage', this.uImage);
    formData.append("pname", this.addProductForm.value.pname);
    formData.append("pvalue", this.addProductForm.value.pvalue);
    formData.append("pdesc", this.addProductForm.value.pdesc);

    this.adminService.addProduct(formData).subscribe(
      user => {
        this.data = user;
        console.log(this.data);
        alert(this.data.message);
        this.router.navigate(['/admin-product']);
      }
    )
  }


}

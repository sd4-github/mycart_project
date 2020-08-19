import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from "../../services/admin.service";


@Component({
  selector: 'app-admin-delete-user',
  templateUrl: './admin-delete-user.component.html',
  styleUrls: ['./admin-delete-user.component.css']
})
export class AdminDeleteUserComponent implements OnInit {
  userList;
  userArray;
  UserDeleteId;

  constructor(private router: Router, private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getUser().subscribe(results => {
      console.log(results);
      this.userList = results;
      console.log(this.userList);
      this.userArray = this.userList.data;
      console.log(this.userArray);
    })
  }

  deleteUser(id){
    console.log(id);
    this.adminService.userdelete_id=id;
    console.log(this.adminService.userdelete_id);
    this.UserDeleteId = this.adminService.userdelete_id;
    console.log(this.UserDeleteId);
    this.adminService.deleteUser().subscribe(deleteResult=>{
      console.log(deleteResult);
    })
  }

}

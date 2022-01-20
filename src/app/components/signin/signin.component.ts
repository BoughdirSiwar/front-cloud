import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../services/admin.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
username!: string;
password!: string
  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
  }
login() {
  this.adminService.login(this.username,this.password).subscribe(next => {
    console.log(next);
    if (next) {
      this.router.navigateByUrl("/home");
    }
  })
}
}

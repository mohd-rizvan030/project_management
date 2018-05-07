import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from './../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private user: UserService) {
  }

  loginUser(user){
    console.log(user.username)
    console.log(user.password)
    if(user.username == "rizvan" && user.password == "1234")
      this.user.setUserLoggedIn()
      this.router.navigate(['dashboard']);
  }


  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {
  }

  loginUser(user){
    console.log(user.username)
    console.log(user.password)
    if(user.username == "rizvan" && user.password == "1234")
      this.router.navigate(['dashboard']);


  }


  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from './../services/user.service';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import { FlashMessagesService } from 'angular2-flash-messages';
const API_URL = environment.apiURL;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private user: UserService, private http: HttpClient, private flashMessage: FlashMessagesService) {
  }

  loginUser(user){
    this.http.post(API_URL + "/users/sign_in", {user: { email: user.username , password: user.password } })
      .subscribe(
        (response) => {
          this.user.setUserLoggedIn()
          // if(response["user"]["isAdmin"]==true)
          this.user.setAdmin();
          this.router.navigate(['dashboard']);
      },
       (error)=>{
        console.log(error);
      })
    }


  ngOnInit() {
  }

}

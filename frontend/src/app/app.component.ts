import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
const API_URL = environment.apiURL;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Project Management App';
  isUserLoggedIn;
  constructor(private router: Router, private user: UserService,
    private http: HttpClient) {
    this.checkLoggedIn()
  }

  checkLoggedIn(){
    this.http.get(API_URL +"/users/logged_in")
      .subscribe(
        (response) => {
         this.user.setUserLoggedIn();
         this.user.setAdmin();
      },
       (error)=>{
        console.log(error);
        this.router.navigate(['login']);
      })
  }

  ngOnInit(){

  }


}

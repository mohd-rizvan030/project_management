import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { FlashMessagesService } from 'angular2-flash-messages';
const API_URL = environment.apiURL;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router, private user: UserService, private http: HttpClient, private flashMessage: FlashMessagesService) { }
  logout(){
    this.http.get(API_URL +"/users/logout" )
      .subscribe(
        (success) => {
        this.user.setUserLoggedOut()
        this.router.navigate(['login']);
      },
      (error)=>{
      this.flashMessage.show('Error! ' + error["error"]["error"], { cssClass: 'alert-danger', timeout: 4000 });
    });
  }

  ngOnInit() {
  }

}

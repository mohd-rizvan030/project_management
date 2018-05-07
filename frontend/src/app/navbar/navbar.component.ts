import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router, private user: UserService) { }
  logout(){
    console.log("you are logged out successfully!")
    this.user.setUserLoggedOut()
    this.router.navigate(['login']);
  }

  ngOnInit() {
  }

}

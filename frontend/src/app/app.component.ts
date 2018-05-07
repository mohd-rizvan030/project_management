import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project Management App';
  isUserLoggedIn;
  constructor(private user: UserService){
    this.isUserLoggedIn = user.getUserLoggedIn()
  }

}

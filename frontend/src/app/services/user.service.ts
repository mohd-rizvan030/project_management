import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private isUserLoggedIn;
  private isAdmin;
  constructor() {
    this.isUserLoggedIn = false;
    this.isAdmin = false;
  }

  setUserLoggedIn() {
    this.isUserLoggedIn = true;
  }

  getUserLoggedIn() {
    return this.isUserLoggedIn;
  }

  setAdmin() {
    this.isAdmin = true;
  }

  getAdmin() {
    return this.isAdmin;
  }

  setUserLoggedOut(){
    this.isUserLoggedIn = false;
  }

}

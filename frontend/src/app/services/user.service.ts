import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private isUserLoggedIn;
  private isAdmin;
  private isMember;
  constructor() {
    this.isUserLoggedIn = false;
    this.isAdmin = false;
    this.isMember = false;
  }

  setUserLoggedIn() {
    this.isUserLoggedIn = true;
  }

  getUserLoggedIn() {
    return this.isUserLoggedIn;
  }

  setAdmin() {
    this.isAdmin = true;
    this.isMember = false;
  }

  getAdmin() {
    return this.isAdmin;
  }

  setMember() {
    this.isMember = true;
    this.isAdmin = false;
  }

  setUserLoggedOut(){
    this.isUserLoggedIn = false;
  }

}

import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private isUserLoggedIn;
  public username;

  constructor() { 
  	this.isUserLoggedIn = false;
  }

  setUserLoggedIn(user:string) {
    console.log("Hello")
  	this.isUserLoggedIn = true;
    this.username = user;
  }

  getUserLoggedIn() {
  	return this.isUserLoggedIn;
  }

  logOut() {
    this.username = undefined
    this.isUserLoggedIn = false
  }

}
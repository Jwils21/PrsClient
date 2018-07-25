import { Injectable } from '@angular/core';
import { User } from "@user/user";

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  loggedinuser: User = null;

  isLoggedIn(): boolean{
  	return this.loggedinuser != null;
  }

  setLoggedInUser(user: User): void {
  	this.loggedinuser = user;
  }

  clearLoggedInUser(user: User): void {
  	this.loggedinuser = null;
  }  

  constructor() { }
}

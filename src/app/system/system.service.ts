import { Injectable } from '@angular/core';
import { User } from "@user/user";
import { ActivatedRoute, Router } from '@angular/router';

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

  loginRouter(): User {
    if (this.isLoggedIn) {
      return this.loggedinuser;
    } else {
      this.router.navigateByUrl("users/login");
      return null;
    }
  }

  constructor(private route: ActivatedRoute,
              private router: Router) { }
}

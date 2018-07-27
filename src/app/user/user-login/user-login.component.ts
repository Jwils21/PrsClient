import { Component, OnInit } from '@angular/core';
import { SystemService } from '@system/system.service';
import { UserService } from '@user/user.service';
import { User } from '@user/user';
import { JsonResponse } from '@app/JsonResponse';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

	user: User = new User();

	message: string = ""

	login(): void{
		this.syssvc.clearLoggedInUser;

		console.log("test");

		this.usersvc.auth(this.user.UserName, this.user.Password)
			.subscribe(resp => {
				console.log(resp);
				if (resp.Data == "Failed" && resp.Message == "Authentication failed") {
					this.message = resp.Message;
					return;
				} else {
					this.syssvc.setLoggedInUser(resp.Data);
					this.router.navigateByUrl("/users/list");
				}
			})
	}

  constructor(private usersvc: UserService,	
	  		  private syssvc: SystemService,
	  		  private router: Router) { } 

  ngOnInit() {
  	//WARNING!! Setting user instance for each time you reload page to aleady have user instance
  	//setting to super admin
  	this.usersvc.get(11)
  		.subscribe(resp => {
  			this.syssvc.setLoggedInUser(resp.Data)
  			console.log("Warning!! User instance is being automatically set to " + this.syssvc.loggedinuser.FirstName + " "
  				+ this.syssvc.loggedinuser.LastName);	
  		})
  }

}

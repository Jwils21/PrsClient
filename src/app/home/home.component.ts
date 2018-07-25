import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from "@system/system.service";
import { UserService } from '@user/user.service';
import { User } from '@user/user';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private usersvc: UserService,	
  		      private syssvc: SystemService,
  			  private route: ActivatedRoute,
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

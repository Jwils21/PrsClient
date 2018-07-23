import { Component, OnInit } from '@angular/core';
import { UserService } from '@user/user.service';
import { User } from '@user/user';
import { JsonResponse } from '@app/JsonResponse';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User = new User();
  YNadmin: string;
  YNreviewer: string;
  YNactive: string;

  YNval(user: User): boolean {
    if (user.IsAdmin ? this.YNadmin = "Yes": this.YNadmin = "No")
    if (user.IsReviewer ? this.YNreviewer = "Yes": this.YNreviewer = "No")
    if (user.Active ? this.YNactive = "Yes": this.YNactive = "No")
    return true;
  }


  remove(): void {
  	this.usersvc.remove(this.user)
  		.subscribe(resp => {
  			console.log(resp);
  			this.router.navigateByUrl("/users/list")
  		});
  }

  constructor(private usersvc: UserService, 
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;

	this.usersvc.get(id)
		.subscribe(resp => {
			this.user = resp.Data;
			console.log(resp);

    });
  }

}
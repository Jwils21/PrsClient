import { Component, OnInit } from '@angular/core';
import { UserService } from '@user/user.service';
import { User } from '@user/user';
import { JsonResponse } from '@app/JsonResponse';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
  YNadmin: string;
  YNreviewer: string;
  YNactive: string;

  YNval(user: User): boolean {
    if (user.IsAdmin ? this.YNadmin = "Yes": this.YNadmin = "No")
    if (user.IsReviewer ? this.YNreviewer = "Yes": this.YNreviewer = "No")
    if (user.Active ? this.YNactive = "Yes": this.YNactive = "No")
    return true;
  }

  constructor(private usersvc: UserService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  //List the users
  this.usersvc.list()
  	.subscribe(resp => {
  		this.users = resp.Data;
  		console.log(resp);
  	})
  }
}

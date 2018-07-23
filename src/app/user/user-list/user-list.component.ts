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

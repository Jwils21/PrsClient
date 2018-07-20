import { Component, OnInit } from '@angular/core';
import { UserService } from '@user/user.service';
import { User } from '@user/user';
import { JsonResponse } from '@app/JsonResponse';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  

  constructor(private usersvc: UserService,
  			  private route: ActivatedRoute,
  			  private router: Router) { }

  ngOnInit() {
  }

}

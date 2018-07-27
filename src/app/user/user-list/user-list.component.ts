import { Component, OnInit } from '@angular/core';
import { SystemService } from '@system/system.service';
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
  currUser: User;

  permissionsCheck() {
   
   if (!this.currUser.IsAdmin) {
      
      //If not an admin, remove all the other users
      for (var user of this.users) {
        if (user.UserName == this.currUser.UserName) {
          var tgUserArr = Array();
          tgUserArr.push(user);
        }
      }
      this.users = tgUserArr;
    } 

  }

  constructor(private usersvc: UserService,
              private syssvc: SystemService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.currUser = this.syssvc.loggedinuser;
    this.usersvc.list()
      .subscribe(resp => {
        this.users = resp.Data;
        console.log(resp);
        this.permissionsCheck();
      })

  }
}

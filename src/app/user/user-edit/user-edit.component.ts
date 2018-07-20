import { Component, OnInit } from '@angular/core';
import { UserService } from '@user/user.service';
import { User } from '@user/user';
import { JsonResponse } from '@app/JsonResponse';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User = new User();

  change(): void {
    this.usersvc.change(this.user)
      .subscribe(resp => {
        console.log(resp);
        //navigate back to the user list page
        this.router.navigateByUrl('users/list')
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

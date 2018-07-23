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

  user: User = new User();

  create(): void {
    this.usersvc.create(this.user)
      .subscribe(resp => {
        console.log(resp);
        this.router.navigateByUrl("users/list")
      });
  }

  cancel(): void{
  	
  }

  constructor(private usersvc: UserService,
  			  private route: ActivatedRoute,
  			  private router: Router) { }

  ngOnInit() {
  }

}

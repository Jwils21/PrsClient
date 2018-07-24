import { Component, OnInit } from '@angular/core';
import { PurchaserequestService } from '@purchaserequest/purchaserequest.service';
import { PurchaseRequest } from '@purchaserequest/purchaserequest';
import { UserService } from '@user/user.service';
import { User } from '@user/user';
import { JsonResponse } from '@app/JsonResponse';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-purchaserequest-create',
  templateUrl: './purchaserequest-create.component.html',
  styleUrls: ['./purchaserequest-create.component.css']
})
export class PurchaserequestCreateComponent implements OnInit {

  users: User[];
  purchaserequest: PurchaseRequest = new PurchaseRequest();

  create(): void {
    this.purchreqsvc.create(this.purchaserequest)
      .subscribe(resp => {
        console.log(resp);
        this.router.navigateByUrl("purchaserequests/list");
      });
  }
  
   cancel(): void{
  	this.router.navigateByUrl("purchaserequests/list");
  }

  constructor(private purchreqsvc: PurchaserequestService,
  			      private usersvc: UserService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {

	//store vendors to choose the Id that correlates with it.
	this.usersvc.list()
  	.subscribe(resp => {
  		this.users = resp.Data;
  		console.log(resp);
  	})
  }

}

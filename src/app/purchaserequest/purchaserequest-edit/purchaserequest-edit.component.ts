import { Component, OnInit } from '@angular/core';
import { PurchaserequestService } from '@purchaserequest/purchaserequest.service';
import { PurchaseRequest } from '@purchaserequest/purchaserequest';
import { UserService } from '@user/user.service';
import { User } from '@user/user';
import { JsonResponse } from '@app/JsonResponse';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-purchaserequest-edit',
  templateUrl: './purchaserequest-edit.component.html',
  styleUrls: ['./purchaserequest-edit.component.css']
})
export class PurchaserequestEditComponent implements OnInit {

  purchaserequest: PurchaseRequest; // = new PurchaseRequest();
  users: User[];

  remove(): void {
    this.purchaserequest.User = null;
    this.purchreqsvc.remove(this.purchaserequest)
      .subscribe(resp => {
        console.log(resp);
        this.router.navigateByUrl("/purchaserequests/list")
      });
  }

  change(): void {
    this.purchaserequest.User = null;
    this.purchreqsvc.change(this.purchaserequest)
      .subscribe(resp => {
        console.log(resp);
        //navigate back to the product list page
        this.router.navigateByUrl('purchaserequests/list')
      });
  }

  cancel(): void {
        //navigate back to the product list page
        this.router.navigateByUrl('purchaserequests/list')
  }

  constructor(private purchreqsvc: PurchaserequestService,
  			      private usersvc: UserService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  	let id = this.route.snapshot.params.id;

  this.purchreqsvc.get(id)
	.subscribe(resp => {
		this.purchaserequest = resp.Data;
		console.log("PR:", resp);
	});

  this.usersvc.list()
  	.subscribe(resp => {
  		this.users = resp.Data;
  		console.log("Usr Data" + resp);
  	})
  }

}


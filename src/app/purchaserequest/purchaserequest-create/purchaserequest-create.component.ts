import { Component, OnInit } from '@angular/core';
import { PurchaserequestService } from '@purchaserequest/purchaserequest.service';
import { PurchaseRequest } from '@purchaserequest/purchaserequest';
import { JsonResponse } from '@app/JsonResponse';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from "@system/system.service";
import { User } from '@user/user';

@Component({
  selector: 'app-purchaserequest-create',
  templateUrl: './purchaserequest-create.component.html',
  styleUrls: ['./purchaserequest-create.component.css']
})
export class PurchaserequestCreateComponent implements OnInit {

  purchaserequest: PurchaseRequest = new PurchaseRequest();

  create(): void {
    this.purchaserequest.User=null;
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
              private syssvc: SystemService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
      this.purchaserequest.UserId = this.syssvc.loggedinuser.Id;
      this.purchaserequest.User = this.syssvc.loggedinuser;
      console.log(this.purchaserequest);
      console.log(this.purchaserequest.User);
  }

}

import { Component, OnInit } from '@angular/core';
import { PurchaserequestService } from '@purchaserequest/purchaserequest.service';
import { PurchaseRequest } from '@purchaserequest/purchaserequest';
import { JsonResponse } from '@app/JsonResponse';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-purchaserequest-detail',
  templateUrl: './purchaserequest-detail.component.html',
  styleUrls: ['./purchaserequest-detail.component.css']
})
export class PurchaserequestDetailComponent implements OnInit {

  purchaserequest: PurchaseRequest;

  remove(): void {
    this.purchreqsvc.remove(this.purchaserequest)
      .subscribe(resp => {
        console.log(resp);
        this.router.navigateByUrl("/purchaserequests/list")
      });
  }

  constructor(private purchreqsvc: PurchaserequestService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  	let id = this.route.snapshot.params.id;
  	this.purchreqsvc.get(id)
	.subscribe(resp => {
		this.purchaserequest = resp.Data;
		console.log(resp);
	});
  }

}

import { Component, OnInit } from '@angular/core';
import { PurchaserequestService } from '@purchaserequest/purchaserequest.service';
import { PurchaseRequest } from '@purchaserequest/purchaserequest';
import { JsonResponse } from '@app/JsonResponse';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-purchaserequest-lines',
  templateUrl: './purchaserequest-lines.component.html',
  styleUrls: ['./purchaserequest-lines.component.css']
})
export class PurchaserequestLinesComponent implements OnInit {

  purchaserequest: PurchaseRequest;

  constructor(private purchreqsvc: PurchaserequestService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  	let id = this.route.snapshot.params.prid;
  	console.log(id)
  	this.purchreqsvc.get(id)
    	.subscribe(resp => {
    		this.purchaserequest = resp.Data;
    		console.log(resp);
    		console.log("Purchase Request..." + this.purchaserequest);
    });
  }

}

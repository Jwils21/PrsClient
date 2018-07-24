import { Component, OnInit } from '@angular/core';
import { PurchaserequestService } from '@purchaserequest/purchaserequest.service';
import { PurchaseRequest } from '@purchaserequest/purchaserequest';
import { JsonResponse } from '@app/JsonResponse';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-purchaserequest-list',
  templateUrl: './purchaserequest-list.component.html',
  styleUrls: ['./purchaserequest-list.component.css']
})
export class PurchaserequestListComponent implements OnInit {

  purchaserequests: PurchaseRequest[];

  constructor(private purchreqsvc: PurchaserequestService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  //List the users
  this.purchreqsvc.list()
  	.subscribe(resp => {
  		this.purchaserequests = resp.Data;
  		console.log(resp);
  	})
  }
}

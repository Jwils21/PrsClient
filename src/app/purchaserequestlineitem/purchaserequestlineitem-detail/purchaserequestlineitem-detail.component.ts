import { Component, OnInit } from '@angular/core';
import { PurchaseRequestLineItem} from '@purchaserequestlineitem/purchaserequestlineitem';
import { PurchaserequestlineitemService} from '@purchaserequestlineitem/purchaserequestlineitem.service';

import { PurchaserequestService } from '@purchaserequest/purchaserequest.service';
import { PurchaseRequest } from '@purchaserequest/purchaserequest';
import { JsonResponse } from '@app/JsonResponse';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductService } from '@product/product.service';
import { Product } from '@product/product';

@Component({
  selector: 'app-purchaserequestlineitem-detail',
  templateUrl: './purchaserequestlineitem-detail.component.html',
  styleUrls: ['./purchaserequestlineitem-detail.component.css']
})
export class PurchaserequestlineitemDetailComponent implements OnInit {

  purchaserequest: PurchaseRequest = new PurchaseRequest();
  purchaseRequestLineItem: PurchaseRequestLineItem = new PurchaseRequestLineItem();

  remove(){
  	this.prlisvc.remove(this.purchaseRequestLineItem)
      .subscribe(resp => {
        console.log(resp);
        this.router.navigateByUrl("/purchaserequests/lines/" + this.purchaserequest.Id);
      });
  }

  setPr(){
  	let id = this.purchaseRequestLineItem.PurchaseRequestId;
	  	this.purchreqsvc.get(id)
	    	.subscribe(resp => {
	    		this.purchaserequest = resp.Data;
	    });
  }

  constructor(private purchreqsvc: PurchaserequestService,
  			      private prlisvc: PurchaserequestlineitemService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  	let id = this.route.snapshot.params.id;

	this.prlisvc.get(id)
		.subscribe(resp => {
			this.purchaseRequestLineItem = resp.Data;
			console.log(resp);
			this.setPr();
	    });


  }

}
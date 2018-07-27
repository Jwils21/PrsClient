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
  selector: 'app-purchaserequestlineitem-create',
  templateUrl: './purchaserequestlineitem-create.component.html',
  styleUrls: ['./purchaserequestlineitem-create.component.css']
})
export class PurchaserequestlineitemCreateComponent implements OnInit {

  purchaseRequestLineItem: PurchaseRequestLineItem = new PurchaseRequestLineItem();
  products: Product[];
  purchaserequest: PurchaseRequest = new PurchaseRequest();

  create(): void {
    this.prlisvc.create(this.purchaseRequestLineItem)
      .subscribe(resp => {
        console.log(resp);
        this.router.navigateByUrl("purchaserequests/lines/" + this.purchaseRequestLineItem.PurchaseRequestId);
      });
  }
  
   cancel(): void{
    this.router.navigateByUrl("purchaserequests/lines/" + this.purchaseRequestLineItem.PurchaseRequestId);
  }

  constructor(private purchreqsvc: PurchaserequestService,
              private prlisvc: PurchaserequestlineitemService,
  			      private productsvc: ProductService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  	this.purchaseRequestLineItem.PurchaseRequestId = this.route.snapshot.params.prid;
    let id = this.purchaseRequestLineItem.PurchaseRequestId;
      this.purchreqsvc.get(id)
        .subscribe(resp => {
          this.purchaserequest = resp.Data;
      });

  	this.productsvc.list()
    	.subscribe(resp => {
    		this.products = resp.Data;
    		console.log(resp);
    });
  }

}

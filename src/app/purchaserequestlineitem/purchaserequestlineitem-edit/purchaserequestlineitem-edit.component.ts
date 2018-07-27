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
  selector: 'app-purchaserequestlineitem-edit',
  templateUrl: './purchaserequestlineitem-edit.component.html',
  styleUrls: ['./purchaserequestlineitem-edit.component.css']
})
export class PurchaserequestlineitemEditComponent implements OnInit {

  purchaseRequestLineItem: PurchaseRequestLineItem = new PurchaseRequestLineItem();
  products: Product[];
  purchaserequest: PurchaseRequest = new PurchaseRequest();

  change(): void {
    this.prlisvc.change(this.purchaseRequestLineItem)
      .subscribe(resp => {
        console.log(resp);
        this.router.navigateByUrl("purchaserequests/lines/" + this.purchaseRequestLineItem.PurchaseRequestId);
      });
  }
  
  cancel(): void{
    this.router.navigateByUrl("purchaserequests/lines/" + this.purchaseRequestLineItem.PurchaseRequestId);
  }

  setPr(){
  	let id = this.purchaseRequestLineItem.PurchaseRequestId;
	  	this.purchreqsvc.get(id)
	    	.subscribe(resp => {
	    		this.purchaserequest = resp.Data;
	    });
  }

  remove(){
  	this.prlisvc.remove(this.purchaseRequestLineItem)
      .subscribe(resp => {
        console.log(resp);
        this.router.navigateByUrl("/purchaserequests/lines/" + this.purchaserequest.Id);
      });
  }

  constructor(private purchreqsvc: PurchaserequestService,
              private prlisvc: PurchaserequestlineitemService,
  			  private productsvc: ProductService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  	let id = this.route.snapshot.params.id;
      this.prlisvc.get(id)
        .subscribe(resp => {
          this.purchaseRequestLineItem = resp.Data;
          this.setPr();
      });

  	this.productsvc.list()
    	.subscribe(resp => {
    		this.products = resp.Data;
    		console.log(resp);
    });
  }

}

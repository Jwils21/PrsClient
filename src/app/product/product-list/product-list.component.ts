import { Component, OnInit } from '@angular/core';
import { ProductService } from '@product/product.service';
import { Product } from '@product/product';
import { JsonResponse } from '@app/JsonResponse';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from '@system/system.service';
import { User } from '@user/user';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  currUser: User;

  constructor(private productsvc: ProductService,
              private syssvc: SystemService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  this.currUser = this.syssvc.loggedinuser;
  //List the users
  this.productsvc.list()
  	.subscribe(resp => {
  		this.products = resp.Data;
  		console.log(resp);
  	})
  }
}


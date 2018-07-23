import { Component, OnInit } from '@angular/core';
import { ProductService } from '@product/product.service';
import { Product } from '@product/product';
import { JsonResponse } from '@app/JsonResponse';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(private vendorsvc: ProductService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  //List the users
  this.vendorsvc.list()
  	.subscribe(resp => {
  		this.products = resp.Data;
  		console.log(resp);
  	})
  }
}


import { Component, OnInit } from '@angular/core';
import { ProductService } from '@product/product.service';
import { Product } from '@product/product';
import { VendorService } from '@vendor/vendor.service';
import { Vendor } from '@vendor/vendor';
import { JsonResponse } from '@app/JsonResponse';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product = new Product();
  vendors: Vendor[];

  remove(): void {
    this.productsvc.remove(this.product)
      .subscribe(resp => {
        console.log(resp);
        this.router.navigateByUrl("/products/list")
      });
  }

  change(): void {
    this.productsvc.change(this.product)
      .subscribe(resp => {
        console.log(resp);
        //navigate back to the product list page
        this.router.navigateByUrl('products/list')
      });
  }

  constructor(private productsvc: ProductService,
  			  private vendorsvc: VendorService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  let id = this.route.snapshot.params.id;

	this.productsvc.get(id)
		.subscribe(resp => {
			this.product = resp.Data;
			console.log(resp);
    });

	//store vendors to choose the Id that correlates with it.
	this.vendorsvc.list()
  	.subscribe(resp => {
  		this.vendors = resp.Data;
  		console.log(resp);
  	})
  }

}

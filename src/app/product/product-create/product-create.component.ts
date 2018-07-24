import { Component, OnInit } from '@angular/core';
import { ProductService } from '@product/product.service';
import { Product } from '@product/product';
import { VendorService } from '@vendor/vendor.service';
import { Vendor } from '@vendor/vendor';
import { JsonResponse } from '@app/JsonResponse';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product: Product = new Product();
  vendors: Vendor[];

   create(): void {
    this.productsvc.create(this.product)
      .subscribe(resp => {
        console.log(resp);
        this.router.navigateByUrl("products/list");
      });
  }

   cancel(): void{
  	this.router.navigateByUrl("products/list");
  }


  constructor(private productsvc: ProductService,
  			      private vendorsvc: VendorService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {

	//store vendors to choose the Id that correlates with it.
	this.vendorsvc.list()
  	.subscribe(resp => {
  		this.vendors = resp.Data;
  		console.log(resp);
  	})
  }

}

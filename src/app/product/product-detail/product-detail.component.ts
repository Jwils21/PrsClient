import { Component, OnInit } from '@angular/core';
import { ProductService } from '@product/product.service';
import { Product } from '@product/product';
import { JsonResponse } from '@app/JsonResponse';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  remove(): void {
    this.productsvc.remove(this.product)
      .subscribe(resp => {
        console.log(resp);
        this.router.navigateByUrl("/products/list")
      });
  }

  constructor(private productsvc: ProductService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  let id = this.route.snapshot.params.id;

	this.productsvc.get(id)
		.subscribe(resp => {
			this.product = resp.Data;
			console.log(resp);
    });
  }

}

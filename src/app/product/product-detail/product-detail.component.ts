import { Component, OnInit } from '@angular/core';
import { ProductService } from '@product/product.service';
import { Product } from '@product/product';
import { JsonResponse } from '@app/JsonResponse';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from '@system/system.service';
import { User } from '@user/user';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  currUser: User;

  remove(): void {
    this.productsvc.remove(this.product)
      .subscribe(resp => {
        console.log(resp);
        this.router.navigateByUrl("/products/list")
      });
  }

  constructor(private productsvc: ProductService,
              private syssvc: SystemService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  this.currUser = this.syssvc.loggedinuser;
  
  let id = this.route.snapshot.params.id;
	this.productsvc.get(id)
		.subscribe(resp => {
			this.product = resp.Data;
			console.log(resp);
    });
  }

}

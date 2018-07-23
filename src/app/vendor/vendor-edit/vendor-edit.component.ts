import { Component, OnInit } from '@angular/core';
import { VendorService } from '@vendor/vendor.service';
import { Vendor } from '@vendor/vendor';
import { JsonResponse } from '@app/JsonResponse';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {

  vendor: Vendor = new Vendor();

   remove(): void {
    this.vendorsvc.remove(this.vendor)
      .subscribe(resp => {
        console.log(resp);
        this.router.navigateByUrl("/vendors/list")
      });
  }

  change(): void {
    this.vendorsvc.change(this.vendor)
      .subscribe(resp => {
        console.log(resp);
        //navigate back to the vendor list page
        this.router.navigateByUrl('vendors/list')
      });
  }

  constructor(private vendorsvc: VendorService, 
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  let id = this.route.snapshot.params.id;

	this.vendorsvc.get(id)
		.subscribe(resp => {
			this.vendor = resp.Data;
			console.log(resp);
    });
    
  }
}
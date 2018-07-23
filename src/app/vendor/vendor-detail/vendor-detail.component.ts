import { Component, OnInit } from '@angular/core';
import { VendorService } from '@vendor/vendor.service';
import { Vendor } from '@vendor/vendor';
import { JsonResponse } from '@app/JsonResponse';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {
  vendor: Vendor = new Vendor();

   remove(): void {
    this.vendorsvc.remove(this.vendor)
      .subscribe(resp => {
        console.log(resp);
        this.router.navigateByUrl("/vendors/list")
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

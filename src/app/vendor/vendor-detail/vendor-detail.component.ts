import { Component, OnInit } from '@angular/core';
import { VendorService } from '@vendor/vendor.service';
import { Vendor } from '@vendor/vendor';
import { JsonResponse } from '@app/JsonResponse';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from '@system/system.service';
import { User } from '@user/user';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {
  
  vendor: Vendor = new Vendor();
  currUser: User;


   remove(): void {
    this.vendorsvc.remove(this.vendor)
      .subscribe(resp => {
        console.log(resp);
        this.router.navigateByUrl("/vendors/list")
      });
  }

  constructor(private vendorsvc: VendorService, 
              private syssvc: SystemService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  this.currUser = this.syssvc.loggedinuser;
  
  let id = this.route.snapshot.params.id;
	this.vendorsvc.get(id)
		.subscribe(resp => {
			this.vendor = resp.Data;
			console.log(resp);
    });
    
  }
}

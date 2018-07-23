import { Component, OnInit } from '@angular/core';
import { VendorService } from '@vendor/vendor.service';
import { Vendor } from '@vendor/vendor';
import { JsonResponse } from '@app/JsonResponse';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {

  vendor: Vendor = new Vendor();

  create(): void {
    this.usersvc.create(this.vendor)
      .subscribe(resp => {
        console.log(resp);
        this.router.navigateByUrl("vendors/list");
      });
  }

  cancel(): void{
  	this.router.navigateByUrl("vendors/list");
  }

  constructor(private usersvc: VendorService,
  			  private route: ActivatedRoute,
  			  private router: Router) { }

  ngOnInit() {
  }

}

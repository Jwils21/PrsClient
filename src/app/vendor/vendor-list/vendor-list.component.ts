import { Component, OnInit } from '@angular/core';
import { VendorService } from '@vendor/vendor.service';
import { Vendor } from '@vendor/vendor';
import { JsonResponse } from '@app/JsonResponse';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  vendors: Vendor[];

  constructor(private vendorsvc: VendorService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  //List the users
  this.vendorsvc.list()
  	.subscribe(resp => {
  		this.vendors = resp.Data;
  		console.log(resp);
  	})
  }
}

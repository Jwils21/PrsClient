import { Component, OnInit } from '@angular/core';
import { Menu } from '@app/menu/menu';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menudata = [
  	{ href: "/users/list", display: "Users"},
    { href: "/vendors/list", display: "Vendors"},
    { href: "/products/list", display: "Products"},
    { href: "/purchaserequests/list", display: "Requests"},
  	{ href: "/about", display: "About"}
  ]

  constructor() { }

  ngOnInit() {
  }

}

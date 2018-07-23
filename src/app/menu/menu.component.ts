import { Component, OnInit } from '@angular/core';
import { Menu } from '@app/menu/menu';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menudata = [
  	{ href: "/users/list", display: "User"},
    { href: "/vendors/list", display: "Vendor"},
  	{ href: "/about", display: "About"}
  ]

  constructor() { }

  ngOnInit() {
  }

}

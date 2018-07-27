import { Product } from "@product/product"

export class PurchaseRequestLineItem {

	Id: number;
	Quantity: number;
	Product: Product;
	ProductId: number;
	PurchaseRequestId: number;
	Active: boolean;

	constructor() {
		this.Id= 0;
		this.Quantity = 1;
		this.Active = true;
	}
}
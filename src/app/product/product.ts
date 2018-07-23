export class Product {

	Id: number;
	VendorId: number;
	PartNumber: string;
	Name: string;
	Price: string;
	Unit: string;
	PhotoPath: string;
	Active: boolean;

	constructor() {
		this.Id= 0;
		this.Active = true;
	}
}

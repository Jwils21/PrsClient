export class Vendor {

	Id: number;
	Code: string;
	Name: string;
	Address: string;
	City: string;
	State: string;
	Zip: string;
	Email: string;
	IsPreApproved: boolean;
	Active: boolean;

	constructor() {
		this.Id= 0;
		this.IsPreApproved = false;
		this.Active = true;
	}
}

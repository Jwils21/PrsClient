export class PurchaseRequest {

	Id: number;
	UserId: number;
	Description: string;
	Justification: string;
	DeliveryMode: string;
	Status: string;
	Total: number;
	ReasonForRejection: string;
	Active: boolean;

	constructor() {
		this.Id= 0;
		this.Active = true;
	}
}
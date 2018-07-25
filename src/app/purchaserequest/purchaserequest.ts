import { User } from "@user/user"

export class PurchaseRequest {

	Id: number;
	UserId: number;
	User: User;
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
		this.Status = "New"
		this.DeliveryMode = "Pickup"
		this.Total = 0;
	}
}
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { PurchaseRequest } from "@purchaserequest/purchaserequest";
import { JsonResponse } from "../JsonResponse";

@Injectable({
  providedIn: 'root'
})
export class PurchaserequestService {

  url = "http://localhost:50798/PurchaseRequests/";

  list(): Observable<JsonResponse>{
  	return this.http.get(this.url + "List") as Observable<JsonResponse>;
  }
  get(Id: number): Observable<JsonResponse>{
  	return this.http.get(this.url + "Get/" + Id) as Observable<JsonResponse>;
  }
  create(purchaserequest: PurchaseRequest): Observable<JsonResponse>{
  	return this.http.post(this.url + "Create", purchaserequest) as Observable<JsonResponse>;
  }
  change(purchaserequest: PurchaseRequest): Observable<JsonResponse>{
  	return this.http.post(this.url + "Change", purchaserequest) as Observable<JsonResponse>;
  }
  remove(purchaserequest: PurchaseRequest): Observable<JsonResponse>{
  	return this.http.post(this.url + "Remove", purchaserequest) as Observable<JsonResponse>;
  }

  constructor(private http: HttpClient) { }
}

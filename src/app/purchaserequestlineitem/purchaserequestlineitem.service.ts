import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { PurchaseRequestLineItem } from "@purchaserequestlineitem/purchaserequestlineitem";
import { JsonResponse } from "../JsonResponse";

@Injectable({
  providedIn: 'root'
})
export class PurchaserequestlineitemService {

  url = "http://localhost:50798/PurchaseRequestLineItems/";

  list(): Observable<JsonResponse>{
  	return this.http.get(this.url + "List") as Observable<JsonResponse>;
  }
  get(Id: number): Observable<JsonResponse>{
  	return this.http.get(this.url + "Get/" + Id) as Observable<JsonResponse>;
  }
  create(prli: PurchaseRequestLineItem): Observable<JsonResponse>{
  	return this.http.post(this.url + "Create", prli) as Observable<JsonResponse>;
  }
  change(prli: PurchaseRequestLineItem): Observable<JsonResponse>{
  	return this.http.post(this.url + "Change", prli) as Observable<JsonResponse>;
  }
  remove(prli: PurchaseRequestLineItem): Observable<JsonResponse>{
  	return this.http.post(this.url + "Remove", prli) as Observable<JsonResponse>;
  }

  constructor(private http: HttpClient) { }
}
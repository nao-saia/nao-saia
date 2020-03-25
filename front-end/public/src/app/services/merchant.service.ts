import { ResponseMerchant } from './../domain/ResponseMerchant';
import { Injectable } from "@angular/core";
import { HttpWrapperService } from "./http-wrapper.service";
import { Merchant } from "../domain/Merchant";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class MerchantService {
  path = "merchants";

  constructor(private http: HttpWrapperService) {}

  findAll(search?: string): Observable<Merchant[]> {
    return this.http.get<Merchant[]>(this.path, {params: {q: search}});
  }

  findByCategory(category, limit = "12"): Observable<ResponseMerchant> {
    return this.http.get<ResponseMerchant>(`${this.path}/category/${category}`, {
      params: { size: limit }
    });
  }

  save(merchant: Merchant): Observable<Merchant> {
    return this.http.post<Merchant>(this.path, merchant);
  }
}

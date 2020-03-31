import { MerchanFilter } from './../domain/merchant-filter';
import { ResponseMerchant } from './../domain/ResponseMerchant';
import { Injectable } from '@angular/core';
import { HttpWrapperService } from './http-wrapper.service';
import { Merchant } from '../domain/Merchant';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MerchantService {
  path = 'merchants';

  constructor(private http: HttpWrapperService) {
    this.http.setBaseUrl(environment.baseUrl);
  }

  findAll(filter: MerchanFilter): Observable<Merchant[]> {
    const queryParams = this.http.getQueryParamsFromObj(filter);
    return this.http.get<Merchant[]>(`${this.path}?${queryParams}`);
  }

  findById(id, limit = '12'): Observable<Merchant> {
    return this.http.get<Merchant>(`${this.path}/${id}`, {
      params: { size: limit }
    });
  }

  save(merchant: Merchant): Observable<Merchant> {
    return this.http.post<Merchant>(this.path, merchant);
  }

  findByUserId(userId: string): Observable<any> {
    return this.http.get<any>(`${this.path}/owner/${userId}`)
  }
}

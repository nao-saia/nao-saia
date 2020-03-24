import { Injectable } from '@angular/core';
import { HttpWrapperService } from './http-wrapper.service';
import { Merchant } from '../domain/Merchant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MerchantService {

  path = 'merchants';

  constructor(private http: HttpWrapperService) {

  }

  save(merchant: Merchant): Observable<Merchant>  {
    return this.http.post<Merchant>(this.path, merchant);
  }

}
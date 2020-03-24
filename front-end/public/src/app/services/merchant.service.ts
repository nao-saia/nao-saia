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

  save(merchant: Merchant): Observable<Merchant>  {
    return this.http.post<Merchant>(this.path, merchant);
  }

}
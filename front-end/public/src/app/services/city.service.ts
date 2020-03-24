import { Injectable } from '@angular/core';
import { HttpWrapperService } from './http-wrapper.service';
import { City } from '../domain/City';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  path = 'cities';

  constructor(private http: HttpWrapperService) {
    this.http.setBaseUrl(environment.baseUrl);
  }

  list(uf: string): Observable<City[]>  {
    return this.http.get<City[]>(`${this.path}?uf=${uf}`);
  }

}

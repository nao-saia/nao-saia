import { Injectable } from '@angular/core';
import { HttpWrapperService } from './http-wrapper.service';
import { City } from '../domain/City';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  path = 'cities';

  constructor(private http: HttpWrapperService) {

  }

  findByUF(uf: string): Observable<City[]>  {
    return this.http.get<City[]>(`${this.path}?uf=${uf}`);
  }

}

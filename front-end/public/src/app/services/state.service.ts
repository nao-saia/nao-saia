import { Injectable } from '@angular/core';
import { HttpWrapperService } from './http-wrapper.service';
import { State } from '../domain/State';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  path = 'states';

  constructor(private http: HttpWrapperService) {
    this.http.setBaseUrl(environment.baseUrl);
  }

  findAll(): Observable<State[]>  {
    return this.http.get<State[]>(this.path);
  }

}

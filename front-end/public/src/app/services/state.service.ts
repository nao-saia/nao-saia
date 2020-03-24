import { Injectable } from '@angular/core';
import { HttpWrapperService } from './http-wrapper.service';
import { State } from '../domain/State';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  path = 'states';

  constructor(private http: HttpWrapperService) {

  }
  
  findAll(): Observable<State>  {
    return this.http.get<State>(this.path);
  }

}

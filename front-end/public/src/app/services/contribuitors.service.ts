import { Injectable } from '@angular/core';
import { HttpWrapperService } from './http-wrapper.service';
import { Observable } from 'rxjs';
import { Contribuitor } from '../domain/Contribuitor';

@Injectable({
  providedIn: 'root'
})
export class ContribuitorsService {

  contribuitorsUrl = 'contribuitors.json';

  constructor(private http: HttpWrapperService) { }

  list(): Observable<Contribuitor[]> {
    return this.http.get<Contribuitor[]>(this.contribuitorsUrl);
  }
}

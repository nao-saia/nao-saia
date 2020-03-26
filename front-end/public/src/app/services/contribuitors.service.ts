import { Injectable } from '@angular/core';
import { HttpWrapperService } from './http-wrapper.service';
import { Observable } from 'rxjs';
import { Contribuitor } from '../domain/Contribuitor';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ContribuitorsService {

  path = 'contributors';

  constructor(private http: HttpWrapperService) {
    this.http.setBaseUrl(environment.baseUrl);
  }

  list(): Observable<Contribuitor[]> {
    return this.http.get<Contribuitor[]>(this.path);
  }
}

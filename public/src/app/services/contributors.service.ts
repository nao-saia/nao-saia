import { Contributor } from '../domain/Contributor';
import { HttpWrapperService } from './http-wrapper.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ContributorsService {

  path = 'contributors';

  constructor(private http: HttpWrapperService) {
    this.http.setBaseUrl(environment.baseUrl);
  }

  list(): Observable<Contributor[]> {
    return this.http.get<Contributor[]>(this.path);
  }
}

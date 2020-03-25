import { User } from './../domain/User';
import { Injectable } from '@angular/core';
import { HttpWrapperService } from './http-wrapper.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  path = 'users';

  constructor(private http: HttpWrapperService) {
    this.http.setBaseUrl(environment.baseUrl);
   }

  public save(user: User): Observable<User>  {
    return this.http.post<User>(this.path, user);
  }
}

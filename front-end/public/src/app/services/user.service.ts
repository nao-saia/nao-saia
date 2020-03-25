import { Injectable } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from './../domain/User';
import { HttpWrapperService } from './http-wrapper.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  USER_KEY = 'user';
  path = 'users';

  constructor(private http: HttpWrapperService, private storage: StorageMap) {
    this.http.setBaseUrl(environment.baseUrl);
  }

  public save(user: User): Observable<User> {
    return new Observable((observer) => {
      this.http.post<User>(this.path, user).subscribe(
        (userSaved) => {
          this.storage.set(this.USER_KEY, userSaved).subscribe(
            () => {
              observer.next(userSaved);
            }, error => {
              observer.error(error);
            });
        },
        error => {
          observer.error(error);
        });
    });
  }

  public login(user: User): Observable<User> {
    return new Observable((observer) => {
      this.http.post<User>(`${this.path}/login`, user).subscribe(
        (userLogged) => {
          this.storage.set(this.USER_KEY, userLogged).subscribe(
            () => {
              observer.next(userLogged);
            }, error => {
              observer.error(error);
            });
        },
        error => {
          observer.error(error);
        });
    });
  }

  public logout(): Observable<any> {
    return new Observable((observer) => {
      // this.http.post<User>(`${this.path}/login`, user).subscribe(
        // (userLogged) => {
          this.storage.delete(this.USER_KEY).subscribe(
            () => {
              observer.next({});
            }, error => {
              observer.error(error);
            });
        // },
        // error => {
        //   observer.error(error);
        // });
    });
  }

  public getCurrentUser(): Observable<any> {
    return this.storage.get(this.USER_KEY);
  }
}

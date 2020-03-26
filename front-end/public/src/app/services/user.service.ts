import { Injectable } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';
import { Observable } from 'rxjs/Observable';
import { environment } from 'src/environments/environment.prod';
import { User } from './../domain/User';
import { HttpWrapperService } from './http-wrapper.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  USER_KEY = 'user';
  path = 'auth/signup';

  observerUserLogged;
  userLogged: Observable<any>;

  constructor(private http: HttpWrapperService, private storage: StorageMap) {
    this.http.setBaseUrl(environment.baseUrl);
    this.userLogged = new Observable((observer) => {
      this.observerUserLogged = observer;
    });
  }

  public save(user: User): Observable<User> {
    return new Observable((observer) => {
      this.http.post<User>(this.path, user).subscribe(
        (userSaved) => {
          this.storage.set(this.USER_KEY, userSaved).subscribe(
            () => {
              observer.next(userSaved);
              this.observerUserLogged.next(userSaved);
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
              this.observerUserLogged.next(userLogged);
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
              this.observerUserLogged.next(null);
            }, error => {
              observer.error(error);
            });
        // },
        // error => {
        //   observer.error(error);
        // });
    });
  }

  public loadUserFromLocalStorage(): void {
    this.storage.get(this.USER_KEY).subscribe(user => {
      this.observerUserLogged.next(user);
    });
  }

  public getCurrentUser(): Observable<any> {
    return this.userLogged;
  }
}

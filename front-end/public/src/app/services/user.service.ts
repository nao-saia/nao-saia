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

  TOKEN_KEY="token";
  USER_KEY = 'user';
  path = 'auth';


  constructor(private http: HttpWrapperService, private storage: StorageMap) {
    this.http.setBaseUrl(environment.baseUrl);
  }

  public save(user: User): Observable<User> {
    return new Observable((subscribe) => {
      this.http.post<User>(`${this.path}/signup`, user).subscribe(
        (userSaved) => {
          this.storage.set(this.USER_KEY, userSaved).subscribe(
            () => {
              subscribe.next(userSaved);
            }, error => {
              subscribe.error(error);
            });
        },
        error => {
          subscribe.error(error);
        });
    });
  }

  public login(user: User): Observable<User> {
    return new Observable((subscribe) => {
      this.http.post<User>(`${this.path}/login`, { username: user.username, password: user.password })
        .subscribe(
          (token) => {
            this.storage.set(this.TOKEN_KEY, token).subscribe(
              () => {
                user.password = null;
                this.observerUserLogged.next(user);
                subscribe.next(token);
              }, error => {
                subscribe.error(error);
              });
          },
          error => {
            subscribe.error(error);
          });
    });
  }

  public logout(): Observable<any> {
    return new Observable((observer) => {
      this.storage.delete(this.USER_KEY).subscribe(
        () => {
          observer.next({});
          this.observerUserLogged.next(null);
        }, error => {
          observer.error(error);
        });
      this.storage.delete(this.TOKEN_KEY)
        .subscribe(() => console.log('Removed token'));
    });
  }

  public loadUserFromLocalStorage(): void {
    this.storage.get(this.USER_KEY).subscribe(user => {
      this.observerUserLogged.next(user);
    });
  }

  public getCurrentUser(): Observable<User> {
    return this.userLogged;
  }
}

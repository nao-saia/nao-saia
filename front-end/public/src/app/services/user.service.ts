import { Injectable } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';
import { Observable } from 'rxjs/Observable';
import { environment } from 'src/environments/environment.prod';
import { User } from './../domain/User';
import { HttpWrapperService } from './http-wrapper.service';
import { UserlogedNotificationService } from './userloged-notification.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  TOKEN_KEY="token";
  USER_KEY = 'user';
  path = 'auth';


  constructor(private http: HttpWrapperService, 
    private storage: StorageMap,
    private userLogedNotification: UserlogedNotificationService) {
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
      this.http.post<any>(`${this.path}/login`, { username: user.username, password: user.password })
        .subscribe(
          (authResponse) => {
            this.storage.set(this.TOKEN_KEY, authResponse.token)
              .subscribe(() => console.log('Inserted token in local storage'));
            const user: User = authResponse.user;
            this.userLogedNotification.notify(user);
            subscribe.next(user);
          },
          error => {
            subscribe.error(error);
          });
    });
  }

  findUserById(userId: string): Observable<User> {
    return this.http.get<User>(`users/${userId}`);
  }

  public logout(): Observable<any> {
    return new Observable((observer) => {
      this.storage.delete(this.USER_KEY).subscribe(
        () => {
          observer.next({});
          this.userLogedNotification.notify(null);
        }, error => {
          observer.error(error);
        });
      this.storage.delete(this.TOKEN_KEY)
        .subscribe(() => console.log('Removed token'));
    });
  }
}

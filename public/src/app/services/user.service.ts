import { Injectable } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';
import { Observable, combineLatest } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from './../domain/User';
import { HttpWrapperService } from './http-wrapper.service';
import { UserlogedNotificationService } from './userloged-notification.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  TOKEN_KEY = 'token';
  USER_KEY = 'user';
  path = 'auth';

  constructor(private http: HttpWrapperService,
    private storage: StorageMap,
    private userLoggedNotification: UserlogedNotificationService) {
    this.http.setBaseUrl(environment.baseUrl);
  }

  public save(user: User): Observable<User> {
    return this.http.post<User>(`${this.path}/signup`, user);
  }

  public login(user: User): Observable<User> {
    return new Observable((subscribe) => {
      this.http.post<any>(`${this.path}/login`, { username: user.username, password: user.password })
        .subscribe(
          (authResponse) => {
            localStorage.setItem(this.TOKEN_KEY, authResponse.token);
            combineLatest(this.storage.set(this.TOKEN_KEY, authResponse.token),
              this.storage.set(this.USER_KEY, authResponse.user))
              .subscribe(() => {
                const user: User = authResponse.user;
                this.userLoggedNotification.notify(user);
                subscribe.next(user);
              });
          }, error => subscribe.error(error));
    });
  }

  findUserById(userId: string): Observable<User> {
    return this.http.get<User>(`users/${userId}`);
  }

  public logout(): Observable<any> {
    return new Observable((subscriber) => {
      localStorage.clear();
      combineLatest(this.storage.delete(this.TOKEN_KEY), this.storage.delete(this.USER_KEY))
        .subscribe(() => {
          this.userLoggedNotification.notify(null);
          subscriber.next();
        });
    });

  }

  getToken(): string {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  getUserLogged(): Observable<any> {
    return this.storage.get(this.USER_KEY);
  }
}

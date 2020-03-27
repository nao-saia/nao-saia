import { UserService } from './../services/user.service';
import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, combineLatest, Observer } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    const userService = this.injector.get(UserService);
    const token = userService.getToken();
    if (token) {
      const authRequest = request.clone({ setHeaders: { 'Authorization': `Bearer ${token}` } });
      return next.handle(authRequest);
    }
    return next.handle(request);
  }
}

import { LoaderService } from './../shared/loader/loader.service';
import { UserService } from './../services/user.service';
import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { Observable, combineLatest, Observer } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private injector: Injector, private router: Router, private loaderService: LoaderService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.incrementRequest();
    const userService = this.injector.get(UserService);
    const token = userService.getToken();
    if (token) {
      const authRequest = request.clone({ setHeaders: { 'Authorization': `Bearer ${token}` } });
      return next.handle(authRequest).pipe(
        tap((event) => {
          if (event instanceof HttpResponse) {
            this.decrementRequest();
          }
        },
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            this.decrementRequest();
            if (err.status !== 401) {
              return;
            }
            this.router.navigate(['/login']);
          }
        }));
    }
    return next.handle(request);
  }

  incrementRequest(): void {
    this.loaderService.show();
  }

  decrementRequest(): void {
    this.loaderService.hide();
  }
}

import { User } from './../domain/User';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedinGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) { }

  async checkAuthentication() {
    const userLogged: User =  await this.userService.getUserLogged().toPromise();
    if (!(userLogged?.id)) {
      this._navigateToLogin();
    }
    return (!!(userLogged));
  }

  async canActivate(activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot) {
    return this.checkAuthentication();
  }

  _navigateToLogin() {
    this.router.navigate(['/login']);
  }
}

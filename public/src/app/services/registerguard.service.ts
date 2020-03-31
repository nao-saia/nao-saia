import { User } from './../domain/User';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterGuardService implements CanActivate {

  constructor(private userService: UserService, private router: Router) { }

  async checkAuthentication() {
    const userLogged: User =  await this.userService.getUserLogged().toPromise();
    if (userLogged?.id) {
      this._navigateToMerchant();
    }
    return !(!!(userLogged));
  }

  async canActivate(activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot) {
    return this.checkAuthentication();
  }

  _navigateToMerchant() {
    this.router.navigate([`/merchant-register`]);
  }
}

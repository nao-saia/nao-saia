import { MerchantService } from './../../services/merchant.service';
import { Router } from '@angular/router';
import { User } from './../../domain/User';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserlogedNotificationService } from './../../services/userloged-notification.service';
import { registerButtonAnimations } from './../register.buttons.animations';

@Component({
  selector: 'app-register-button',
  templateUrl: './register-button.component.html',
  styleUrls: ['./register-button.component.css'],
  animations: registerButtonAnimations
})
export class RegisterButtonComponent implements OnInit {

  logged: boolean;
  userLogged: any;

  ngOnInit(): void {
  }

  constructor(private userLogedNotification: UserlogedNotificationService,
              private location: Location,
              private merchantService: MerchantService) {
    this.userLogedNotification.notifier.subscribe((userLogged: User) => {
      this.updateAuthStatus(userLogged);
    });
  }

  updateAuthStatus(userLogged: User) {
    this.userLogged = userLogged;
    this.logged = !!(userLogged && userLogged.id);
}

  isVisibleOnThisPage(): boolean {
    const visiblePaths = [
    ];
    const notAllowedPaths = [
      '#/merchant-register'
    ];
    const pagePath = this.location.prepareExternalUrl(this.location.path());

    const visiblePath = visiblePaths.length === 0 ||
                        visiblePaths.filter(item => item.indexOf(pagePath) >= 0).length >= 0;
    const allowedPath = notAllowedPaths.length === 0 ||
                        notAllowedPaths.filter(item => pagePath.indexOf(item) >= 0).length === 0;
    return visiblePath && allowedPath;
  }

  openRegister(): void {
    this.merchantService.intentRegister();
  }

}

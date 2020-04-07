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
    private location: Location) {
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
    const notVisiblePaths = [
      '#/merchant-register'
    ];
    const pagePath = this.location.prepareExternalUrl(this.location.path());
    return (visiblePaths.length === 0 || visiblePaths.indexOf(pagePath) >= 0)
      && (notVisiblePaths.length === 0 || notVisiblePaths.indexOf(pagePath) < 0);
  }

}

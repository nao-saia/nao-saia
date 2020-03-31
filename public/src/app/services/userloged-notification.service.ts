import { User } from './../domain/User';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserlogedNotificationService {
  notifier = new EventEmitter<User>();

  notify(user: User) {
    this.notifier.emit(user);
  }
}

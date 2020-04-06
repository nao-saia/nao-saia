import { registerButtonAnimations } from './../register.buttons.animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-button',
  templateUrl: './register-button.component.html',
  styleUrls: ['./register-button.component.css'],
  animations: registerButtonAnimations
})
export class RegisterButtonComponent implements OnInit {

  fabButtons = [
    {
      icon: 'timeline'
    },
    {
      icon: 'view_headline'
    },
    {
      icon: 'room'
    },
    {
      icon: 'lightbulb_outline'
    },
    {
      icon: 'lock'
    }
  ];
  buttons = [];
  fabTogglerState = 'inactive';

  ngOnInit(): void {
  }

  constructor() { }

  showItems() {
    this.fabTogglerState = 'active';
    this.buttons = this.fabButtons;
  }

  hideItems() {
    this.fabTogglerState = 'inactive';
    this.buttons = [];
  }

  onToggleFab() {
    this.buttons.length ? this.hideItems() : this.showItems();
  }
}

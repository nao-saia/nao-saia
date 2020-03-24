import { AbstractViewComponent } from './../shared/abstract.view.component';
import { Merchant } from './../domain/Merchant';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.css']
})
export class MerchantComponent extends AbstractViewComponent implements OnInit {

  model: Merchant;

  constructor() {
    super();
    this.model = new Merchant();
  }

  ngOnInit(): void {
  }

}

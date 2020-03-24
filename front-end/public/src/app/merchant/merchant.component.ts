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
  }

  ngOnInit() {
    this.model = new Merchant();
  }

  save(): void {
    if (this.model.valid()) {
      this.service.save(this.model).subscribe(
        response => {
          super.showAlertInfo('Usuário cadastrado com sucesso!');
          setTimeout(() => {
            this.router.navigate(['/merchant']);
          }, 7000);
        },
        reject => {
          super.showAlertWarning(reject.error.message);
        });
    }
  }

}

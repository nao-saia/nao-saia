import { Router, ActivatedRoute } from '@angular/router';
import { MerchantService } from './../services/merchant.service';
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

  constructor(
      private service: MerchantService,
      private router: Router,
      private route: ActivatedRoute) {
    super();
    this.model = new Merchant();
    this.route.params.subscribe(params => this.model.userId = params['id']);
  }

  ngOnInit() {
  }

  save(): void {
    if (this.model.valid()) {
      this.service.save(this.model).subscribe(
        response => {
          super.showAlertInfo('Estabelecimento cadastrado com sucesso!');
          setTimeout(() => {
            this.router.navigate([`/profile/${response.id}`]);
          }, 7000);
        },
        reject => {
          super.showAlertWarning(reject.error.message);
        });
    } else {
      super.showAlertWarning('Cadastro inválido verifique os campos obrigatórios!');
    }
  }

}

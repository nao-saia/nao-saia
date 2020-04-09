import { User } from './../../domain/User';
import { UserService } from './../../services/user.service';
import { Merchant } from "./../../domain/Merchant";
import { Router, ActivatedRouteSnapshot } from "@angular/router";
import { Component, OnInit, Input } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";
import Mask from "src/app/shared/utils/Mask";

@Component({
  selector: "ns-establishment",
  templateUrl: "./establishment.component.html",
  styleUrls: ["./establishment.component.css"],
  animations: [
    trigger("estabelecimentoTrigger", [
      state("ready", style({ opacity: 1 })),
      transition("void => ready", [
        style({ opacity: 0, transform: "translate(-30px, -10px)" }),
        animate("300ms 0s ease-in-out")
      ])
    ])
  ]
})
export class EstablishmentComponent implements OnInit {
  estabelecimentoState = "ready";
  apps: string[] = [];
  showEditLink: boolean = false;

  @Input() merchant: Merchant;
  category: string = "";

  constructor(private router: Router,
    private userService: UserService) { }

  ngOnInit() {
    this.checkUserLogged();
    this.merchant.whatsapp = Mask.maskValuePhone(this.merchant.whatsapp);

    if (this.merchant.categories) {
      this.category = this.merchant.categories[0];
    }
  }

  checkUserLogged() {
    this.userService.getUserLogged()
      .subscribe((userLogged: User) => {
        this.showEditLink = userLogged?.id === this.merchant.userId
          && this.router.url === '/my-merchants';
      });
  }

  changeRouteDetails() {
    this.router.navigate([`/merchant/${this.merchant.id}`], {
      state: this.merchant
    });
  }

  getIcon(category: string): string {
    switch (category.toUpperCase()) {
      case 'SERVIÇOS': { return 'fa-wrench'; }
      case 'FARMÁCIA': { return 'fa-medkit'; }
      case 'LOJA': { return 'fa-shopping-cart'; }
      case 'EMPRESAS': { return 'fa-shopping-cart'; }
      case 'OUTROS(AS)': { return 'fa-shopping-cart'; }
      case 'SUPERMERCADO': { return 'fa-shopping-cart'; }
      case 'PAPELARIA': { return 'fa-paperclip'; }
      case 'BORRACHARIA': { return 'fa-car'; }
      case 'BAR': { return 'fa-beer'; }
      case 'DISTRIBUIDORA DE BEBIDAS': { return 'fa-beer'; }
      case 'PADARIA': { return 'fa-birthday-cake'; }

      case 'RESTAURANTE': { return 'fa-shopping-cart'; }
      case 'HAMBURGUERIA': { return 'fa-shopping-cart'; }
      case 'LANCHONETE': { return 'fa-shopping-cart'; }
      case 'PET SHOP': { return 'fa-shopping-cart'; }
      case 'PIZZARIA': { return 'fa-shopping-cart'; }
      case 'AÇOUGUE': { return 'fa-shopping-cart'; }
      default: { return 'fa-shopping-cart'; }
    }
  }
}

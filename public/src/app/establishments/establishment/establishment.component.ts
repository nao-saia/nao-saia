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
}

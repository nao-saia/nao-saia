import { EstablishmentService } from "./../establishments.service";
import { Component, OnInit, Input } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";
import Mask from "src/app/shared/utils/Mask";
import { Establishment } from "../establishment.model";
import { Router } from "@angular/router";

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

  @Input() establishment: Establishment;

  constructor(
    private router: Router,
    private restaurantService: EstablishmentService
  ) {}

  ngOnInit() {
    this.establishment.whatsapp = Mask.maskValuePhone(
      this.establishment.whatsapp
    );

    if (this.establishment.ifood) {
      this.apps.push("assets/img/establishment/ifood.ico");
    }

    if (this.establishment.rappi) {
      this.apps.push("assets/img/establishment/rappi.ico");
    }

    if (this.establishment.uberEats) {
      this.apps.push("assets/img/establishment/ubereats.ico");
    }
  }

  changeRouteDetails() {
    this.router.navigate([`/establishment/${this.establishment.id}`], {
      state: this.establishment
    });
  }
}

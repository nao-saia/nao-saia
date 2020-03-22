import { EstabelecimentosService } from "./../estabelecimentos.service";
import { Estabelecimento } from "./../estabelecimento.model";
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
  selector: "ns-estabelecimento",
  templateUrl: "./estabelecimento.component.html",
  styleUrls: ["./estabelecimento.component.css"],
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
export class EstabelecimentoComponent implements OnInit {
  estabelecimentoState = "ready";
  apps: string[] = []

  @Input() estabelecimento: Estabelecimento;

  constructor(private restaurantService: EstabelecimentosService) {}

  ngOnInit() {
    this.estabelecimento.whatsapp = Mask.maskValuePhone(
      this.estabelecimento.whatsapp
    );

    if(this.estabelecimento.ifood) {
      this.apps.push("assets/img/estabelecimentos/ifood.ico")
    }

    if(this.estabelecimento.rappi) {
      this.apps.push("assets/img/estabelecimentos/rappi.ico")
    }

    if(this.estabelecimento.uberEats) {
      this.apps.push("assets/img/estabelecimentos/ubereats.ico")
    }
  }

  getRouterLinkEstabelecimento() {}

  selecionarEstabelecimento(estabelecimento: Estabelecimento) {}
}

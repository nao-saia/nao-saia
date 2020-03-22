import { EstabelecimentosService } from "./estabelecimentos.service";
import { Estabelecimento } from "./estabelecimento.model";
import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/do";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/from";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "ns-estabelecimentos",
  templateUrl: "./estabelecimentos.component.html",
  styleUrls: ["./estabelecimentos.component.css"],
  animations: [
    trigger("toggleSearch", [
      state(
        "hidden",
        style({
          opacity: 0,
          "max-height": "0px"
        })
      ),
      state(
        "visible",
        style({
          opacity: 1,
          "max-height": "70px",
          "margin-top": "20px"
        })
      ),
      transition("* => *", animate("250ms 0s ease-in-out"))
    ])
  ]
})
export class EstabelecimentosComponent implements OnInit {
  searchBarState = "hidden";
  estabelecimentos: Estabelecimento[];

  searchForm: FormGroup;
  searchControl: FormControl;

  constructor(
    private estabelecimentoService: EstabelecimentosService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.searchControl = this.fb.control("");
    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    });

    this.searchControl.valueChanges
      .debounceTime(500)
      .distinctUntilChanged()
      .switchMap(searchTerm =>
        this.estabelecimentoService
          .listarEstabelecimentos(searchTerm)
          .catch(error => Observable.from([]))
      )
      .subscribe(
        estabelecimentos => (this.estabelecimentos = estabelecimentos)
      );

    this.listarEstabelecimentos();
  }

  listarEstabelecimentos() {
    this.estabelecimentoService
      .listarEstabelecimentos()
      .subscribe(
        estabelecimentos => (this.estabelecimentos = estabelecimentos)
      );
  }

  toggleSearch() {
    this.searchBarState =
      this.searchBarState === "hidden" ? "visible" : "hidden";
  }
}

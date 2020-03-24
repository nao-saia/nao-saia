import { EstablishmentService } from "./establishments.service";
import { Establishment } from "./establishment.model";
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

const PAGE_SIZE = 12;

@Component({
  selector: "ns-establishments",
  templateUrl: "./establishments.component.html",
  styleUrls: ["./establishments.component.css"],
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
export class EstablishmentsComponent implements OnInit {
  searchBarState = "hidden";
  estabelecimentos: Establishment[];

  searchForm: FormGroup;
  searchControl: FormControl;

  limit: number = PAGE_SIZE;
  categorieSelected: string = "restaurante"

  constructor(
    private estabelecimentoService: EstablishmentService,
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

  // Realizar aqui a consulta paginada
  addLimit() {
    this.limit = this.limit + PAGE_SIZE;
    this.listarEstabelecimentos();
  }

  listarEstabelecimentos(search?) {
    this.estabelecimentoService
      .listarEstabelecimentos(search)
      .subscribe(
        estabelecimentos =>
          (this.estabelecimentos = estabelecimentos.slice(0, this.limit))
      );
  }

  toggleSearch() {
    this.searchBarState =
      this.searchBarState === "hidden" ? "visible" : "hidden";
  }

  changeCategoria(categoria: string) {
    this.categorieSelected = categoria;
    this.listarEstabelecimentos(categoria);
  }
}

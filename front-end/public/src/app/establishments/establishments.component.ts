import { City } from './../domain/City';
import { State } from './../domain/State';
import { CityService } from './../services/city.service';
import { StateService } from './../services/state.service';
import { MerchantService } from './../services/merchant.service';
import { Merchant } from './../domain/Merchant';
import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/from';
import { Observable } from 'rxjs/Observable';

const PAGE_SIZE = 12;

@Component({
  selector: 'ns-establishments',
  templateUrl: './establishments.component.html',
  styleUrls: ['./establishments.component.css'],
  animations: [
    trigger('toggleSearch', [
      state(
        'hidden',
        style({
          opacity: 0,
          'max-height': '0px'
        })
      ),
      state(
        'visible',
        style({
          opacity: 1,
          'max-height': '70px',
          'margin-top': '20px'
        })
      ),
      transition('* => *', animate('250ms 0s ease-in-out'))
    ])
  ]
})
export class EstablishmentsComponent implements OnInit {
  searchBarState = 'hidden';
  merchants: Merchant[] = [];
  states: State[] = [];
  cities: City[] = [];

  searchForm: FormGroup;
  searchControl: FormControl;
  stateControl: FormControl;
  cityControl: FormControl;

  limit: number = PAGE_SIZE;
  categorieSelected: string = 'restaurante';

  constructor(
    private merchantService: MerchantService,
    private stateService: StateService,
    private cityService: CityService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.searchControl = this.fb.control('');
    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    });

    this.searchControl.valueChanges
      .debounceTime(500)
      .distinctUntilChanged()
      .switchMap(searchTerm =>
        this.merchantService
          .findAll(searchTerm)
          .catch(error => Observable.from([]))
      )
      .subscribe(merchants => (this.merchants = merchants));

    this.listMerchants();
    this.listStates();
  }

  // Realizar aqui a consulta paginada
  addLimit() {
    this.limit = this.limit + PAGE_SIZE;
    this.listMerchants();
  }

  listMerchants(search?) {
    this.merchantService
      .findAll(search)
      .subscribe(
        merchants => (this.merchants = merchants.slice(0, this.limit))
      );
  }

  listStates() {
    this.stateService.findAll().subscribe(states => (this.states = states));
  }

  changeState(uf) {
    this.cityService.findByUF(uf).subscribe(cities => (this.cities = cities));
    //console.log(uf.target.value)
  }

  toggleSearch() {
    this.searchBarState =
      this.searchBarState === 'hidden' ? 'visible' : 'hidden';
  }

  changeCategoria(categoria: string) {
    this.categorieSelected = categoria;
    this.merchantService
      .findByCategory(categoria)
      .subscribe(response => (this.merchants = response.content));
  }
}

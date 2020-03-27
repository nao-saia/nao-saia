import { MerchanFilter } from './../domain/merchant-filter';
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
import { GeolocationService } from '../services/geolocation-service.service';
import { Address } from '../domain/Address';

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

  HIDE_FILTER = 'Esconder filtros de pesquisa';
  SHOW_FILTER = 'Exibir filtros de pesquisa';
  DEFAULT_CATEGORY = 'RESTAURANTE';

  searchBarState = 'visible';
  linkSearchBarState = this.HIDE_FILTER;

  merchants: Merchant[] = [];
  states: State[] = [];
  cities: City[] = [];

  searchForm: FormGroup;
  searchControl: FormControl;
  stateControl: FormControl;
  cityControl: FormControl;

  filter: MerchanFilter;

  limit: number = PAGE_SIZE;

  categorieSelected: string = this.DEFAULT_CATEGORY;

  constructor(
    private merchantService: MerchantService,
    private stateService: StateService,
    private cityService: CityService,
    private geolocation: GeolocationService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.clearFilter();
    this.createSearchControl();
    this.listStates();
    this.findAll();
  }

  createSearchControl() {
    this.searchControl = this.fb.control('');
    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    });

    this.searchControl.valueChanges
      .debounceTime(500)
      .distinctUntilChanged()
      .subscribe(searchTerm => this.findByFantasyName(searchTerm));
  }

  // Realizar aqui a consulta paginada
  addLimit() {
    this.limit = this.limit + PAGE_SIZE;
    this.findAll();
  }

  findAll(): void {
    this.merchantService
      .findAll(this.filter).subscribe(
        merchants => (this.merchants = merchants.slice(0, this.limit))
      );
  }

  findByFantasyName(search ?: string) {
    this.filter.fantasyName = search;
    this.findAll();
  }

  listStates() {
    this.stateService.findAll().subscribe(states => (this.states = states));
  }

  changeState(stateID: string) {
    this.filter.clearGeolocation();
    this.filter.state = stateID;
    this.cityService.findByUF(stateID).subscribe(cities => (this.cities = cities));
    this.findAll();
  }

  changeCity(city: string) {
    this.filter.clearGeolocation();
    this.filter.city = city;
    this.findAll();
  }

  toggleSearch() {
    this.searchBarState =
      this.searchBarState === 'hidden' ? 'visible' : 'hidden';
      if (this.searchBarState === 'hidden') {
        this.linkSearchBarState = this.SHOW_FILTER;
      } else {
        this.linkSearchBarState = this.HIDE_FILTER;
      }
  }

  changeCategoria(category: string) {
    this.filter.category = category;
    this.findAll();
  }

  private clearFilter(): void {
    this.filter = new MerchanFilter();
    this.filter.category = this.DEFAULT_CATEGORY;
  }

  getCurrentLocation(): void {
    const address = new Address();
    this.filter.clearLocation();
    this.geolocation.getCurrentLocation(address).subscribe((address) => {
      this.filter.lat = address.location.latitude;
      this.filter.lon = address.location.longitude;
      this.filter.state = address.state;
      this.filter.city = address.city;
      this.findAll();
    });
  }

}

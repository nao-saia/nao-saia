import { CategoryService } from './../services/category.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import { Address } from '../domain/Address';
import { Page } from '../domain/page';
import { GeolocationService } from '../services/geolocation-service.service';
import { City } from './../domain/City';
import { Merchant } from './../domain/Merchant';
import { MerchanFilter } from './../domain/merchant-filter';
import { State } from './../domain/State';
import { CityService } from './../services/city.service';
import { MerchantService } from './../services/merchant.service';
import { StateService } from './../services/state.service';
import { Category } from '../domain/Category';


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
  DEFAULT_CATEGORY = 'Restaurante';
  OVERRIDE = true;
  PRESERVE = false;

  searchBarState = 'visible';
  linkSearchBarState = this.HIDE_FILTER;

  merchants: Array<Merchant> = [];
  states: State[] = [];
  cities: City[] = [];
  categories: Category[] = [];

  searchForm: FormGroup;
  searchControl: FormControl;
  stateControl: FormControl;
  cityControl: FormControl;
  categoryControl: FormControl;

  filter: MerchanFilter;

  page: Page<Merchant>;

  constructor(
    private merchantService: MerchantService,
    private stateService: StateService,
    private cityService: CityService,
    private geolocation: GeolocationService,
    private categoryService: CategoryService,
    private fb: FormBuilder) {
    this.createForm();
   }

  ngOnInit() {
    this.clearFilter();
    
    this.listStates();
    this.listCategories();
    this.findAll(this.OVERRIDE);
  }

  createStateControl() {
    this.stateControl = this.fb.control('');
    this.stateControl.setValue('');
  }

  createCityControll() {
    this.cityControl = this.fb.control('');
    this.cityControl.disable();
    this.cityControl.setValue('');
  }

  createCategoryControll() {
    this.categoryControl = this.fb.control('');
    this.categoryControl.setValue(this.DEFAULT_CATEGORY);
  }

  createSearchControl() {
    this.searchControl = this.fb.control('');
    this.searchControl.valueChanges
      .debounceTime(500)
      .distinctUntilChanged()
      .subscribe(searchTerm => this.findByFantasyName(searchTerm));
  }

  createForm(): void {
    this.createSearchControl();
    this.createStateControl();
    this.createCityControll();
    this.createCategoryControll();

    this.searchForm = this.fb.group({
      searchControl: this.searchControl,
      categoryControl: this.categoryControl,
      stateControl: this.stateControl,
      cityControl: this.cityControl
    });
  }

  // Realizar aqui a consulta paginada
  fetchMoreRows() {
    this.findAll(this.PRESERVE);
  }

  findAll(override: boolean): void {
    this.filter.page = this.page.pageNumber;
    this.filter.size = this.page.pageSize;
    this.merchantService.findAll(this.filter).subscribe(
      response => {
        if (override) {
          this.page = Page.of(response);
          this.merchants = this.page.content;
        } else {
          this.page.update(Page.of(response));
          this.merchants.concat(this.page.content);
        }
      });
  }

  findByFantasyName(search?: string) {
    this.filter.fantasyName = search;
    this.findAll(this.OVERRIDE);
  }

  listStates() {
    this.stateService.findAll().subscribe(states => (this.states = states));
  }

  listCategories() {
    this.categoryService.findAll().subscribe(categories => (this.categories = categories));
  }

  changeState(stateID: string) {
    this.filter.clearGeolocation();
    this.filter.state = stateID ? stateID : null;
    this.cities = [];
    this.cityControl.disable();
    this.cityService.findByUF(stateID).subscribe(cities => {
      if (cities) {
        this.cityControl.enable();
      }
      this.cities = cities;
    });
    this.findAll(this.OVERRIDE);
  }

  changeCity(city: string) {
    this.filter.clearGeolocation();
    this.filter.city = city ? city : null;
    this.findAll(this.OVERRIDE);
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

  changeCategory(category: string) {
    this.filter.category = category ? category : null;
    this.findAll(this.OVERRIDE);
  }

  private clearFilter(): void {
    this.page = new Page<Merchant>(0, PAGE_SIZE);
    this.filter = new MerchanFilter();
    this.filter.category = this.DEFAULT_CATEGORY;
  }

  getCurrentLocation(): void {
    const address = new Address();
    this.filter.clearLocation();
    this.geolocation.getCurrentLocation(address, true).subscribe((address) => {
      this.filter.lat = address.location.latitude;
      this.filter.lon = address.location.longitude;
      this.filter.state = address.state ? address.state : null;
      this.filter.city = address.city ? address.city : null;
      this.findAll(this.OVERRIDE);
    });
  }

}

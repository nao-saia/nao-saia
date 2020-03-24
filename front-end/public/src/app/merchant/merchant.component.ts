import { City } from './../domain/City';
import { State } from './../domain/State';
import { StateService } from './../services/state.service';
import { CityService } from './../services/city.service';
import { GeolocationService } from './../services/geolocation-service.service';
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

  category: string;
  phone: string;

  states: Array<State>;
  cities: Array<City>;

  constructor(
      private service: MerchantService,
      private router: Router,
      private route: ActivatedRoute,
      private geoLocation: GeolocationService,
      private cityService: CityService,
      private stateService: StateService) {
    super();
    this.model = new Merchant();
    this.route.params.subscribe(params => this.model.userId = params['id']);
  }

  ngOnInit() {
  }

  save(): void {

    this.model.categories.push(this.category);
    this.model.phones.push(this.phone);

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

  changeCEP(data): void {
    this.geoLocation.getCurrentLocation(this.model.address).subscribe(address => {
      this.model.address = address;
    });
  }

  loadStates(): void {
    this.states = [];
    this.stateService.list().subscribe(states => {
      this.states = states;
    });
  }

  loadCities(): void {
    this.cities = [];
    this.cityService.list(this.model.address.state).subscribe(cities => {
      this.cities = cities;
    });
  }
}

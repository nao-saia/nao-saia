import { User } from './../domain/User';
import { UserService } from './../services/user.service';
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

  useGeolocation: boolean;
  geolocationEnable: boolean;

  constructor(
    private service: MerchantService,
    private router: Router,
    private route: ActivatedRoute,
    private geoLocation: GeolocationService,
    private cityService: CityService,
    private stateService: StateService,
    private userService: UserService) {
    super();
    this.model = new Merchant();
  }
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      const merchantId = params['merchantId'];
      if (merchantId) {
        this.findMerchantById(merchantId);
      } else {
        this.addIdUserLogged();
      }
    });
    this.geolocationEnable = this.geoLocation.isGeolocationEnable();
  }

  findMerchantById(merchantId: string) {
    this.service.findById(merchantId)
      .subscribe((merchant: Merchant) => this.model = merchant);
  }

  addIdUserLogged() {
    this.userService.getUserLogged()
      .subscribe((userLogged: User) => this.model.userId = userLogged.id);
  }

  save(): void {

    this.model.categories.push(this.category);
    this.model.phones.push(this.phone);

    if (this.model.valid()) {
      this.service.save(this.model).subscribe(
        () => {
          super.showAlertInfo('Estabelecimento cadastrado com sucesso!');
          setTimeout(() => {
            this.router.navigate([`/my-merchants`]);
          }, 3000);
        },
        reject => {
          super.showAlertWarning(reject.error.message);
        });
    } else {
      super.showAlertWarning('Cadastro inválido verifique os campos obrigatórios!');
    }
  }

  changeCEP(data): void {
    const zipcode = this.model?.address?.zipcode ?? null;
    this.geoLocation.getAddressFromZipCode(zipcode).subscribe(address => {
      this.model.address = address;
    }, error => {
      super.showAlertWarning('Erro ao consultar CEP');
      console.log(error);
    });
  }

  changeGeolocation(data): void {
    if (this.useGeolocation) {
      this.geoLocation.getCurrentLocation(this.model.address).subscribe(
        address => {
          this.model.address = address;
        },
        error => {
          super.showAlertWarning('Erro ao obter localização');
          console.log(error);
        });
    } else {
      this.model.clearAddress();
    }
  }

  loadStates(): void {
    this.states = [];
    this.stateService.findAll().subscribe(states => {
      this.states = states;
    });
  }

  loadCities(): void {
    this.cities = [];
    this.cityService.findByUF(this.model.address.state).subscribe(cities => {
      this.cities = cities;
    });
  }
}

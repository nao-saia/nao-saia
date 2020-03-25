import { Injectable } from '@angular/core';
import { Observable, Subscriber, zip } from 'rxjs';
import { Address } from '../domain/Address';
import { HttpWrapperService } from './http-wrapper.service';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor(private http: HttpWrapperService) { }

  getCurrentLocation(address: Address): Observable<Address> {
    return new Observable((subscriber) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position: Position) => {
          if (position) {
            this.getAddressFromLocation(position.coords.latitude, position.coords.longitude)
              .subscribe((responseAddress: Address) => subscriber.next(responseAddress));
          } else {
            this._handlePositionError(address.zipcode, subscriber);
          }
        }, () => this._handlePositionError(address.zipcode, subscriber));
      } else {
        this._handlePositionError(address.zipcode, subscriber);
      }
    });
  }

  _handlePositionError(zipCode: string, subscriber: Subscriber<Address>): void {
    this.getAddressFromZipCode(zipCode)
      .subscribe((responseAddress: Address) => subscriber.next(responseAddress)
      , (error) => subscriber.error(error));
  }

  getAddressFromZipCode(zipCode: string): Observable<Address> {
    return this.http.get<Address>(`geolocation/cep/${zipCode}`);
  }

  getAddressFromLocation(latitude: number, longitude: number): Observable<Address> {
    return this.http.get<Address>(`geolocation/location?lat=${latitude}&lon=${longitude}`);
  }
}

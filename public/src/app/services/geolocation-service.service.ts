import { Injectable } from '@angular/core';
import { Observable, Subscriber, zip } from 'rxjs';
import { Address } from '../domain/Address';
import { HttpWrapperService } from './http-wrapper.service';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor(private http: HttpWrapperService) { }

  getCurrentLocation(address: Address, anyDevice?: boolean): Observable<Address> {
    return new Observable((subscriber) => {
      if (this.isGeolocationEnable(anyDevice)) {
        const geolocation = navigator.geolocation;
        geolocation.getCurrentPosition((position: Position) => {
          if (position) {
            // console.log(`http://maps.google.com/maps?q=${position.coords.latitude},${position.coords.longitude}`);
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

  isGeolocationEnable(anyDevice?: boolean): boolean {
    return (this.isMobile() || anyDevice) && !!navigator.geolocation;
  }

  isMobile(): boolean {
    const ua = navigator.userAgent;
    return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua));
  }
}

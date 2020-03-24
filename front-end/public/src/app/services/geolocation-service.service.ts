import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Address } from '../domain/Address';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor() { }

  getCurrentLocation(address: Address): Observable<Address> {
    return new Observable((observer) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position: Position) => {
          if (position) {
            address.location.latitude = position.coords.latitude;
            address.location.longitude = position.coords.longitude;
            observer.next(address);
          } else {
            // TODO:obter a latitude e longitude pelo CEP
            observer.error('Não foi possível obter a localização');
          }
        }, (error) => {
          // TODO:obter a latitude e longitude pelo CEP
          observer.error(error);
        });
      } else {
        // TODO:obter a latitude e longitude pelo CEP
        observer.error('Não foi possível obter a localização');
      }
    });
  }
}

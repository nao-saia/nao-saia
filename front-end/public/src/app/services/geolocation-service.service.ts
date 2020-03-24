import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

export interface Location {
  latitude?: number;
  longitude?: number;
}

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor() { }

  getCurrentLocation(cep: string): Observable<Location> {
    return new Observable((observer) => {
      if (navigator.geolocation) {
        const location: Location = {};
        navigator.geolocation.getCurrentPosition((position: Position) => {
          if (position) {
            location.latitude = position.coords.latitude;
            location.longitude = position.coords.longitude;
            observer.next(location);
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

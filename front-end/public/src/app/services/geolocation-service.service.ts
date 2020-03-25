import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from '../domain/Address';
import { HttpWrapperService } from './http-wrapper.service';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor(private http: HttpWrapperService) { }

  getCurrentLocation(address: Address): Observable<Address> {
    return new Observable((observer) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position: Position) => {
          if (position) {
            this.getAddressFromLocation(position.coords.latitude, position.coords.longitude)
                .subscribe((responseAddress: Address) => observer.next(responseAddress));
          } else {
            this.getAddressFromZipCode(address.zipcode)
                .subscribe((responseAddress: Address) => observer.next(responseAddress));
          }
        }, (error) => {
          console.log(error)
          this.getAddressFromZipCode(address.zipcode)
              .subscribe((responseAddress: Address) => observer.next(responseAddress));
        });
      } else {
        this.getAddressFromZipCode(address.zipcode)
            .subscribe((responseAddress: Address) => observer.next(responseAddress));
      }
    });
  }

  getAddressFromZipCode(zipCode: string): Observable<Address> {
    return this.http.get<Address>(`geolocation/cep/${zipCode}`);
  }

  getAddressFromLocation(latitude: number, longitude: number): Observable<Address> {
    return this.http.get<Address>(`geolocation/location?lat=${latitude}&lon=${longitude}`);
  }
}

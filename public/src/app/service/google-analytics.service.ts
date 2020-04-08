import { Injectable } from '@angular/core';

declare let gtag: Function;

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {

  constructor() { }

  public eventEmitter(
    eventName: string,
    eventCategory: string,
    eventAction: string,
    eventLabel: string = null,
    eventValue: number = null) {

    try {
      gtag('event', eventName, {
        eventCategory: eventCategory,
        eventLabel: eventLabel,
        eventAction: eventAction,
        eventValue: eventValue
      });
    } catch (Error) {
      console.error(`Erro ao enviar dados para Google Analytics eventName: ${eventName}, eventCategory: ${eventCategory}
      , eventAction: ${eventAction}, eventLabel: ${eventLabel}, eventValue: ${eventValue}`);
      console.error(Error);
    }

  }
}

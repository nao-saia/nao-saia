import { LoaderState } from './loader.state';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loaderSubject = new Subject<LoaderState>();
  loaderState = this.loaderSubject.asObservable();

  counter = 0;

  constructor() { }

  show(): void {
    this.counter++;
    console.log(`show(): ${this.counter}`);
    this.loaderSubject.next(<LoaderState>{ show: this.counter > 0 });
  }

  hide(): void {
    this.counter--;
    console.log(`hide(): ${this.counter}`);
    this.loaderSubject.next(<LoaderState>{ show: this.counter > 0 });
  }
}

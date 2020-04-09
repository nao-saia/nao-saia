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

  constructor() {
    this.clearStatus();
  }

  show(): void {
    this.counter++;
    // console.log(`show() counter [${this.counter}]`);
    this.loaderSubject.next(<LoaderState>{ show: this.counter > 0 });
  }

  hide(): void {
    this.counter--;
    // console.log(`hide() counter [${this.counter}]`);
    this.loaderSubject.next(<LoaderState>{ show: this.counter > 0 });
  }

  clearStatus(): void  {
    this.counter = 0;
    this.loaderSubject.next(<LoaderState>{ show: this.counter > 0 });
  }
}

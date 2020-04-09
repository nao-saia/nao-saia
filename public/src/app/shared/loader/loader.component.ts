import { LoaderState } from './loader.state';
import { LoaderService } from './loader.service';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit, OnDestroy {

  show = false;
  private subscription: Subscription;
  constructor(private loaderService: LoaderService) {}

  ngOnInit() {
    this.subscription = this.loaderService.loaderState
      .subscribe((state: LoaderState) => {
        this.show = state.show;
      });
  }

  ngOnDestroy() {
    this.show = false;
    this.subscription.unsubscribe();
  }

}

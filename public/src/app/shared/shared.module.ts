import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { ChipsAutoCompleteComponent } from './chips-auto-complete/chips-auto-complete.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { LoaderComponent } from './loader/loader.component';

export let options: Partial<IConfig> | (() => Partial<IConfig>);

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgxMaskModule.forRoot(options),
    AgmCoreModule.forRoot({apiKey: "AIzaSyC-GFEND6ng0QITwJEDo1SV7CbeVHdyMI0"}),
    MatChipsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule
  ],
  declarations: [
    GoogleMapsComponent,
    ChipsAutoCompleteComponent,
    LoaderComponent
  ],
  exports: [
    GoogleMapsComponent,
    ChipsAutoCompleteComponent,
    LoaderComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }
}

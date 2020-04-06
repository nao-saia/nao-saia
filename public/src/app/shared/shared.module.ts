import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule  } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { ChipsAutoCompleteComponent } from './chips-auto-complete/chips-auto-complete.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';

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
    MatIconModule
  ],
  declarations: [
    GoogleMapsComponent,
    ChipsAutoCompleteComponent
  ],
  exports: [
    GoogleMapsComponent,
    ChipsAutoCompleteComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }
}

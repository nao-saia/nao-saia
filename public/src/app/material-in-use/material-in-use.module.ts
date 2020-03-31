import { ModuleWithProviders } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ]
})
export class MaterialInUseModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MaterialInUseModule
    };
  }
}

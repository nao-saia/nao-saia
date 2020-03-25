import { NgModule, ModuleWithProviders } from "@angular/core";
import { NgxMaskModule, IConfig } from "ngx-mask";
import { GoogleMapsComponent } from "./google-maps/google-maps.component";
import { AgmCoreModule } from "@agm/core";

export let options: Partial<IConfig> | (() => Partial<IConfig>);

@NgModule({
  imports: [
    NgxMaskModule.forRoot(options),
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyC-GFEND6ng0QITwJEDo1SV7CbeVHdyMI0"
    })
  ],
  declarations: [GoogleMapsComponent],
  exports: [GoogleMapsComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }
}

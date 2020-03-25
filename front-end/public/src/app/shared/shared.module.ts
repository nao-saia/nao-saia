import { NgModule, ModuleWithProviders } from "@angular/core";
import { NgxMaskModule, IConfig } from "ngx-mask";

export let options: Partial<IConfig> | (() => Partial<IConfig>);

@NgModule({
  imports: [NgxMaskModule.forRoot(options)]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }
}

import { EstabelecimentosService } from "./../estabelecimentos/estabelecimentos.service";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule, FormBuilder } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

import { NgxMaskModule, IConfig } from "ngx-mask";

export let options: Partial<IConfig> | (() => Partial<IConfig>);

@NgModule({
  declarations: [FooterComponent, NavbarComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxMaskModule.forRoot(options)
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [EstabelecimentosService, FormBuilder]
    };
  }
}

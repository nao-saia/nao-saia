import { EstabelecimentosService } from "./estabelecimentos/estabelecimentos.service";
import { SharedModule } from "./shared/shared.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app.routing";

import { AppComponent } from "./app.component";
import { SignupComponent } from "./signup/signup.component";
import { LandingComponent } from "./landing/landing.component";
import { ProfileComponent } from "./profile/profile.component";

import { HomeModule } from "./home/home.module";
import { LoginComponent } from "./login/login.component";
import { ContributorsComponent } from "./landing/contributors/contributors.component";
import { EstabelecimentosComponent } from "./estabelecimentos/estabelecimentos.component";
import { EstabelecimentoComponent } from "./estabelecimentos/estabelecimento/estabelecimento.component";
import { BannerRegisterComponent } from "./landing/banner-register/banner-register.component";

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    LoginComponent,
    ContributorsComponent,
    EstabelecimentosComponent,
    EstabelecimentoComponent,
    BannerRegisterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    SharedModule.forRoot()
  ],
  providers: [EstabelecimentosService],
  bootstrap: [AppComponent]
})
export class AppModule {}

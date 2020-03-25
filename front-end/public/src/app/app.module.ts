import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SharedModule } from "./shared/shared.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app.routing";
import { CarouselModule } from "ngx-bootstrap/carousel";

import { AppComponent } from "./app.component";
import { SignupComponent } from "./signup/signup.component";
import { LandingComponent } from "./landing/landing.component";
import { ProfileComponent } from "./profile/profile.component";

import { HomeModule } from "./home/home.module";
import { LoginComponent } from "./login/login.component";
import { ContributorsComponent } from "./landing/contributors/contributors.component";
import { BannerRegisterComponent } from "./landing/banner-register/banner-register.component";
import { EstablishmentsComponent } from "./establishments/establishments.component";
import { CategoriesComponent } from "./establishments/categories/categories.component";
import { EstablishmentComponent } from "./establishments/establishment/establishment.component";
import { EstablishmentDetailComponent } from "./establishments/establishment-detail/establishment-detail.component";

import { AdvantagesComponent } from "./landing/advantages/advantages.component";
import { GoalsComponent } from "./landing/goals/goals.component";
import { SupportUsComponent } from "./landing/support-us/support-us.component";
import { MerchantComponent } from "./merchant/merchant.component";
import { AlertComponent } from "./shared/alert/alert.component";

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    LoginComponent,
    ContributorsComponent,
    BannerRegisterComponent,
    EstablishmentsComponent,
    EstablishmentComponent,
    CategoriesComponent,
    EstablishmentDetailComponent,
    AdvantagesComponent,
    GoalsComponent,
    SupportUsComponent,
    MerchantComponent,
    AlertComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    HomeModule,
    CarouselModule.forRoot(),
    SharedModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

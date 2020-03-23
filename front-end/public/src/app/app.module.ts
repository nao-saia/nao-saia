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
import { EstablishmentComponent } from './establishments/establishment/establishment.component';
import { EstablishmentDetailComponent } from './establishments/establishment-detail/establishment-detail.component';


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
    EstablishmentDetailComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    CarouselModule.forRoot(),
    SharedModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { MaterialInUseModule } from './material-in-use/material-in-use.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ROUTES } from './app.routing';

import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';

import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { ContributorsComponent } from './landing/contributors/contributors.component';
import { BannerRegisterComponent } from './landing/banner-register/banner-register.component';
import { EstablishmentsComponent } from './establishments/establishments.component';
import { CategoriesComponent } from './establishments/categories/categories.component';
import { EstablishmentComponent } from './establishments/establishment/establishment.component';
import { EstablishmentDetailComponent } from './establishments/establishment-detail/establishment-detail.component';

import { AdvantagesComponent } from './landing/advantages/advantages.component';
import { GoalsComponent } from './landing/goals/goals.component';
import { SupportUsComponent } from './landing/support-us/support-us.component';
import { MerchantRegisterComponent } from './merchant-register/merchant-register.component';
import { AlertComponent } from './shared/alert/alert.component';
import { FormBuilder } from '@angular/forms';
import { OwnerMerchantComponent } from './owner-merchant/owner-merchant.component';
import { AuthInterceptor } from './security/auth.interceptor';

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
    MerchantRegisterComponent,
    AlertComponent,
    FooterComponent,
    NavbarComponent,
    OwnerMerchantComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    NgbModule,
    HomeModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule.forRoot(),
    MaterialInUseModule.forRoot(),
    CarouselModule.forRoot(),
    RouterModule.forRoot(ROUTES, {
      useHash: true,
      preloadingStrategy: PreloadAllModules
    })
  ],
  providers: [FormBuilder, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {}

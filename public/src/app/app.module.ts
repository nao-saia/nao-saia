import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { ROUTES } from './app.routing';
import { MaskCpfCnpjDirective } from './directives/mask-cpf-cnpj.directive';
import { MaskTelCelDirective } from './directives/mask-tel-cel.directive';
import { MaskZipCodeDirective } from './directives/mask-zipcode.directive';
import { CategoriesComponent } from './establishments/categories/categories.component';
import { EstablishmentDetailComponent } from './establishments/establishment-detail/establishment-detail.component';
import { EstablishmentComponent } from './establishments/establishment/establishment.component';
import { EstablishmentsComponent } from './establishments/establishments.component';
import { HomeModule } from './home/home.module';
import { AdvantagesComponent } from './landing/advantages/advantages.component';
import { BannerRegisterComponent } from './landing/banner-register/banner-register.component';
import { ContributorsComponent } from './landing/contributors/contributors.component';
import { GoalsComponent } from './landing/goals/goals.component';
import { LandingComponent } from './landing/landing.component';
import { SupportUsComponent } from './landing/support-us/support-us.component';
import { LoginComponent } from './login/login.component';
import { MaterialInUseModule } from './material-in-use/material-in-use.module';
import { MerchantRegisterComponent } from './merchant-register/merchant-register.component';
import { OwnerMerchantComponent } from './owner-merchant/owner-merchant.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthInterceptor } from './security/auth.interceptor';
import { AlertComponent } from './shared/alert/alert.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SharedModule } from './shared/shared.module';
import { SignupComponent } from './signup/signup.component';
import { RegisterButtonComponent } from './merchant/register-button/register-button.component';
import { TermsComponent } from './terms/terms.component';





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
    MaskCpfCnpjDirective,
    MaskTelCelDirective,
    MaskZipCodeDirective,
    RegisterButtonComponent,
    TermsComponent,
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
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
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

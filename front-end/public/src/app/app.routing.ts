import { Routes } from '@angular/router';
import { EstablishmentsComponent } from './establishments/establishments.component';
import { ContributorsComponent } from './landing/contributors/contributors.component';
import { LandingComponent } from './landing/landing.component';
import { SupportUsComponent } from './landing/support-us/support-us.component';
import { LoginComponent } from './login/login.component';
import { MerchantRegisterComponent } from './merchant-register/merchant-register.component';
import { OwnerMerchantComponent } from './owner-merchant/owner-merchant.component';
import { ProfileComponent } from './profile/profile.component';
import { LoggedinGuard } from './services/loggedin.service';
import { RegisterGuardService } from './services/registerguard.service';
import { SignupComponent } from './signup/signup.component';

export const ROUTES: Routes = [
  // { path: 'home',             component: HomeComponent },
  { path: 'home', component: LandingComponent },
  { path: 'register', component: SignupComponent, canActivate: [RegisterGuardService] },
  { path: 'landing', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contributors', component: ContributorsComponent },
  { path: 'support-us', component: SupportUsComponent },
  { path: 'merchant/:id', component: ProfileComponent },
  { path: 'merchant-register', component: MerchantRegisterComponent },
  { path: 'merchant-register/:merchantId', component: MerchantRegisterComponent },
  { path: 'merchants', component: EstablishmentsComponent },
  { path: 'my-merchants', component: OwnerMerchantComponent, canActivate: [LoggedinGuard] },
  { path: '', redirectTo: 'landing', pathMatch: 'full' }
];

import { RegisterGuardService } from './services/registerguard.service';
import { Routes } from "@angular/router";
import { EstablishmentsComponent } from "./establishments/establishments.component";
import { ContributorsComponent } from "./landing/contributors/contributors.component";
import { LandingComponent } from "./landing/landing.component";
import { SupportUsComponent } from "./landing/support-us/support-us.component";
import { LoginComponent } from "./login/login.component";
import { MerchantComponent } from "./merchant/merchant.component";
import { ProfileComponent } from "./profile/profile.component";
import { SignupComponent } from "./signup/signup.component";


export const ROUTES: Routes = [
  // { path: 'home',             component: HomeComponent },
  { path: "home", component: LandingComponent },
  { path: "merchant/:id", component: ProfileComponent },
  { path: "register", component: SignupComponent, canActivate: [RegisterGuardService] },
  { path: "landing", component: LandingComponent },
  { path: "login", component: LoginComponent },
  { path: "contribuitors", component: ContributorsComponent },
  { path: "support-us", component: SupportUsComponent },
  { path: "merchant-register/:userId", component: MerchantComponent },
  { path: "merchants", component: EstablishmentsComponent },
  { path: "", redirectTo: "landing", pathMatch: "full" }
];

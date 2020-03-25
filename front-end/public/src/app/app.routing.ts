import { EstablishmentsComponent } from "./establishments/establishments.component";
import { Routes } from "@angular/router";

import { ProfileComponent } from "./profile/profile.component";
import { SignupComponent } from "./signup/signup.component";
import { LandingComponent } from "./landing/landing.component";
import { ContributorsComponent } from "./landing/contributors/contributors.component";
import { LoginComponent } from "./login/login.component";
import { SupportUsComponent } from "./landing/support-us/support-us.component";
import { MerchantComponent } from "./merchant/merchant.component";

export const ROUTES: Routes = [
  // { path: 'home',             component: HomeComponent },
  { path: "home", component: LandingComponent },
  { path: "profile/:id", component: ProfileComponent },
  { path: "register", component: SignupComponent },
  { path: "landing", component: LandingComponent },
  { path: "login", component: LoginComponent },
  { path: "contribuitors", component: ContributorsComponent },
  { path: "support-us", component: SupportUsComponent },
  { path: "merchant/:userId", component: MerchantComponent },
  { path: "merchants", component: EstablishmentsComponent },
  { path: "", redirectTo: "landing", pathMatch: "full" }
];

import { EstablishmentsComponent } from "./establishments/establishments.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./profile/profile.component";
import { SignupComponent } from "./signup/signup.component";
import { LandingComponent } from "./landing/landing.component";
import { ContributorsComponent } from "./landing/contributors/contributors.component";
import { LoginComponent } from "./login/login.component";
import { SupportUsComponent } from "./landing/support-us/support-us.component";
import { MerchantComponent } from "./merchant/merchant.component";

const routes: Routes = [
  // { path: 'home',             component: HomeComponent },
  { path: "home", component: LandingComponent },
  { path: "profile/:id", component: ProfileComponent },
  { path: "register", component: SignupComponent },
  { path: "landing", component: LandingComponent },
  { path: "login", component: LoginComponent },
  { path: "contribuitors", component: ContributorsComponent },
  { path: "support-us", component: SupportUsComponent },
  { path: "merchant/:userId", component: MerchantComponent },
  { path: "establishments", component: EstablishmentsComponent },
  { path: "", redirectTo: "landing", pathMatch: "full" }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: []
})
export class AppRoutingModule {}

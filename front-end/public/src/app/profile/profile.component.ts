import { Establishment } from "./../establishments/establishment.model";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  _id: string;
  establishment: Establishment;

  constructor(private router: Router) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.establishment = <Establishment>(
        this.router.getCurrentNavigation().extras.state
      );
    }

  }

  ngOnInit() {}
}

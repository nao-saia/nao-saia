import { MerchantService } from "./../services/merchant.service";
import { Establishment } from "./../establishments/establishment.model";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Merchant } from "../domain/Merchant";
import { Location } from "@angular/common";
import Mask from "../shared/utils/Mask";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  id: string;
  merchant: Merchant;

  constructor(
    private router: ActivatedRoute,
    private mechantServie: MerchantService,
    private location: Location
  ) {
    this.router.url.subscribe(value => (this.id = value[1].path));
  }

  formatarNumeros() {
    let phones = this.merchant.phones;

    if (phones) {
      phones.forEach(phone => {
        try {
          phone = Mask.maskValuePhone(phone);
        } catch (error) {
          console.log(`Falha ao aplicar máscara no telefonte ${phone}`);
        }
      });
    }
  }

  ngOnInit() {
    this.mechantServie
      .findById(this.id)
      .subscribe(merchant => (this.merchant = merchant));
  }

  getPhones() {
    let phonesLabel = "";
    let phones = this.merchant.phones;
    if (phones) {
      phones.forEach((phone, index) => {
        if (index > 0) {
          phonesLabel = phonesLabel
            .concat(" e ")
            .concat(Mask.maskValuePhone(phone));
        } else {
          phonesLabel = phonesLabel.concat(Mask.maskValuePhone(phone));
        }
      });
    }
    return phonesLabel;
  }

  getLogo() {
    let logo = this.merchant.logo;
    if (!logo) {
      logo = "../../assets/img/icons/user.png";
    }
    return logo;
  }

  getCategories() {
    let categoriesLabel: string = "";
    if (this.merchant.categories) {
      this.merchant.categories.forEach((categorie, index) => {
        if (index > 0) {
          categoriesLabel = categoriesLabel.concat(" e ").concat(categorie);
        } else {
          categoriesLabel = categoriesLabel.concat(categorie);
        }
      });
    }
    return categoriesLabel;
  }

  goBack() {
    this.location.back();
  }
}

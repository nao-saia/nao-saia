import { User } from './../domain/User';
import { UserService } from './../services/user.service';
import { MerchantService } from './../services/merchant.service';
import { Merchant } from './../domain/Merchant';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-owner-merchant',
  templateUrl: './owner-merchant.component.html',
  styleUrls: ['./owner-merchant.component.css']
})
export class OwnerMerchantComponent implements OnInit {

  merchants: Merchant[] = [];

  constructor(private merchantService: MerchantService, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserLogged().subscribe((user: User) => {
      this.merchantService.findByUserId(user.id)
        .subscribe(results => this.merchants = results.content);
    });
  }

}

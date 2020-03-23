import { IAlert } from './../sections/alerts-section/alerts-section.component';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from './../domain/User';
import { UserService } from './../services/user.service';
import { Alert } from '../shared/alert/alert.component';
import { error } from 'protractor';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    focus = false;
    focus1 = false;
    focus2 = false;
    focus3 = false;

    model: User;
    showOAuth: boolean = false;
    dataAlert: Alert = {};

    constructor(private service: UserService, private router: Router) { }

    ngOnInit() {
        this.model = new User();
    }

    save(): void {
        if (this.model.valid()) {
            this.service.save(this.model)
                .subscribe(
                    () => this.router.navigate(['/merchant'])
                    , error => {
                        this.dataAlert = {
                            type: 'warning',
                            strong: 'Warning!',
                            message: error.statusText,
                            icon: 'ni ni-bell-55'
                        };
                    });
        }
    }

    onCloseAlert(): void {
        this.dataAlert = {};
    }
}
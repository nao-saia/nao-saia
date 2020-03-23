import { IAlert } from './../sections/alerts-section/alerts-section.component';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from './../domain/User';
import { UserService } from './../services/user.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    focus: false;
    focus1: false;
    focus2: false;
    focus3: false;

    model: User;

    showAlert: boolean = false;

    constructor(private service: UserService, private router: Router) { }

    ngOnInit() {
        this.model = new User();
    }

    save(): void {
        if (this.model.valid()) {
            this.service.save(this.model).subscribe(response => this.router.navigate(['/merchant'])
                , error => alert(JSON.stringify(error)));
        }
    }
}
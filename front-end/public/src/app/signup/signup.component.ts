import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './../domain/User';
import { UserService } from './../services/user.service';
import { AbstractViewComponent } from './../shared/abstract.view.component';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent extends AbstractViewComponent implements OnInit {

    focus = false;
    focus1 = false;
    focus2 = false;
    focus3 = false;

    model: User;
    showOAuth: boolean = false;
    constructor(private service: UserService, private router: Router) {
        super();
    }

    ngOnInit() {
        this.model = new User();
    }

    save(): void {
        if (this.model.valid()) {
            this.service.save(this.model).subscribe(
                response => {
                    super.showAlertInfo('Usuário cadastrado com sucesso!');
                    setTimeout(() => {
                        this.router.navigate(['/merchant']);
                    }, 7000);
                },
                reject => {
                    super.showAlertWarning(reject.error.message);
                });
        }
    }
}
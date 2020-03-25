import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
        this.service.getCurrentUser().subscribe(userLogged => {
            if (userLogged && userLogged.id) {
                this.navigateToMerchant(userLogged.id);
            }
        });
        this.service.loadUserFromLocalStorage();
    }

    ngOnInit() {
        this.model = new User();
    }

    navigateToMerchant(id: any) {
        setTimeout(() => {
            this.router.navigate([`/merchant/${id}`]);
        });
    }

    save(): void {
        this.service.save(this.model).subscribe(
            userSaved => {
                super.showAlertInfo('Usuário cadastrado com sucesso!');
                this.navigateToMerchant(userSaved.id);
            },
            reject => {
                super.showAlertWarning(reject.error.message);
            });
    }
}
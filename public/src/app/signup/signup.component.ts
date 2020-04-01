import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from './../domain/Role';
import { User } from './../domain/User';
import { UserService } from './../services/user.service';
import { AbstractViewComponent } from './../shared/abstract.view.component';
import { ToastrService } from 'ngx-toastr';

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

    ownerUser: boolean;

    constructor(private service: UserService,
        private router: Router, toastr: ToastrService) {
        super(toastr);
    }

    ngOnInit() {
        this.model = new User();
        const userRole: Role = Role.ROLE_USER;
        this.model.addRoles(userRole);
    }

    navigateToMerchant(timeout = 3000) {
        setTimeout(() => {
            this.router.navigate([`/merchant-register`]);
        }, timeout);
    }

    isAddOwnerRole() {
        return this.ownerUser && !this.model.hasRole(Role.ROLE_OWNER);
    }

    addOwnerRole(user: User) {
        // if (this.isAddOwnerRole()) {
            const ownerRole: Role = Role.ROLE_OWNER;
            user.addRoles(ownerRole);
        // }
    }

    login() {
        this.service.login(this.model)
            .subscribe(() => this.navigateToMerchant()
                , (error) => super.showAlertWarning(error));
    }

    save(): void {
        this.addOwnerRole(this.model);
        this.service.save(this.model).subscribe(
            () => {
                super.showAlertInfo('Usuário cadastrado com sucesso!');
                this.login();
            },
            reject => super.showAlertWarning(reject.error.message));
    }
}
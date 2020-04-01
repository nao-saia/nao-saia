import { Router } from '@angular/router';
import { AbstractViewComponent } from './../shared/abstract.view.component';
import { UserService } from './../services/user.service';
import { User } from './../domain/User';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends AbstractViewComponent implements OnInit {

  model: User;

  constructor(toastr: ToastrService, private service: UserService, private router: Router) {
    super(toastr);
   }

  ngOnInit() {
    this.model = new User();
  }

  login(): void {

    if (this.model.loginValid()) {
      this.service.login(this.model).subscribe(
        () => this.router.navigate([`/my-merchants`]),
        reject => {
          if (reject.status >= 400 && reject.status < 500) {
            super.showAlertWarning('Erro ao realizar login, verifique usuário e senha');
          } else {
            super.showAlertWarning(reject.error.message);
          }
        });
    } else {
      super.showAlertWarning('Informe e-mail e senha válidos');
    }
  }

}

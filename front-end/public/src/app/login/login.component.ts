import { Router } from '@angular/router';
import { AbstractViewComponent } from './../shared/abstract.view.component';
import { UserService } from './../services/user.service';
import { User } from './../domain/User';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends AbstractViewComponent implements OnInit {

  model: User;

  constructor(private service: UserService, private router: Router) {
    super();
   }

  ngOnInit() {
    this.model = new User();
  }

  login(): void {

    if (this.model.loginValid()) {
      this.service.login(this.model).subscribe(
        () => this.router.navigate([`/my-merchants`]),
        reject => {
          super.showAlertWarning(reject.error.message);
        });
    } else {
      super.showAlertWarning('Informe e-mail e senha válidos');
    }
  }

}

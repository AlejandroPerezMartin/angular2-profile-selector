import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(public authService: AuthService, private router: Router) {}

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}

import { Component } from '@angular/core';

import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {

  public user: any = null;

  constructor(private authService: AuthService) {
    this.user = authService.user;
  }

  logout() {
    this.authService.logout();
  }
}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { MdlSnackbarService } from 'angular2-mdl';

@Injectable()
export class AuthService {

  public user: any = null;

  constructor(private af: AngularFire, private router: Router, private mdlSnackbarService: MdlSnackbarService) {
    this.af.auth.subscribe(auth => this.user = auth);
  }

  login() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    }).then( success => {
      this.router.navigate(['/dashboard']);
      this.mdlSnackbarService.showSnackbar({ message: `Welcome back ${this.user.google.displayName.split(' ')[0]}!` });
    });
  }

  logout(): void {
    this.af.auth.logout().then( done => this.router.navigate(['']) );
  }

}

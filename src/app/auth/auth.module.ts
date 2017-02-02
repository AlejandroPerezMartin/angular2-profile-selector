import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuthRoutes } from './auth.routes';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthRoutes)
  ],
  declarations: [
    LoginComponent,
    SignupComponent
  ]
})
export class AuthModule { }

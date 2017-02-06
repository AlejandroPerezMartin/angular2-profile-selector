import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, PreloadAllModules, NoPreloading } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdlModule } from 'angular2-mdl';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { environment } from '../environments/environment';

import { AppRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './_services/auth.service';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, firebaseAuthConfig),
    RouterModule.forRoot(AppRoutes, { useHash: true, preloadingStrategy: NoPreloading, enableTracing: false }),
    FormsModule,
    DashboardModule,
    MdlModule,
    AuthModule,
    HttpModule
  ],
  exports: [],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  providers: [ AuthService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

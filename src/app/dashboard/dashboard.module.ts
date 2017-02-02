import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardRoutes } from './dashboard.routes';

import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [ CommonModule, RouterModule.forChild(DashboardRoutes) ],
  exports: [ DashboardComponent ],
  declarations: [ DashboardComponent, ProfileComponent ]
})
export class DashboardModule { }

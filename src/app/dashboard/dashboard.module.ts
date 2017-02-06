import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardRoutes } from './dashboard.routes';

import { DashboardComponent } from './dashboard.component';
import { ProfilesComponent } from './profiles/profiles.component';

import { AuthGuard } from '../_guards/auth.guard';
import { SharedModule } from '../shared/shared.module';
import { NewComponent } from './new/new.component';
import { AddComponent } from './profiles/add/add.component';

@NgModule({
  imports: [ CommonModule, RouterModule.forChild(DashboardRoutes), SharedModule ],
  exports: [ DashboardComponent ],
  declarations: [ DashboardComponent, ProfilesComponent, NewComponent, AddComponent ],
  providers: [ AuthGuard ]
})
export class DashboardModule { }

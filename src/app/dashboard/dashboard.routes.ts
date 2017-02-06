import { Routes } from '@angular/router';

import { ProfilesComponent } from './profiles/profiles.component';
import { DashboardComponent } from './dashboard.component';
import { AddComponent } from './profiles/add';

import { AuthGuard } from '../_guards/auth.guard';

export const DashboardRoutes: Routes = [
  { path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: ProfilesComponent},
      { path: 'profiles', component: ProfilesComponent, children: [
        { path: 'add', component: AddComponent}
      ]}
    ]
  },
];




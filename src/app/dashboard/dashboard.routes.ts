import { Routes } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard.component';

export const DashboardRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent,
    children: [
      { path: 'profile', component: ProfileComponent}
    ]
  },
];




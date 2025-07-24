import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard';
import { TeamsComponent } from './components/teams/teams';
import { BuoysComponent } from './components/buoys/buoys';
import { InspectorsComponent } from './components/inspectors/inspectors';
import { FishComponent } from './components/fish/fish';
import { LaunchesComponent } from './components/launches/launches';
import { ReportsComponent } from './components/reports/reports';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'buoys', component: BuoysComponent },
  { path: 'inspectors', component: InspectorsComponent },
  { path: 'fish', component: FishComponent },
  { path: 'launches', component: LaunchesComponent },
  { path: 'reports', component: ReportsComponent },
  { path: '**', redirectTo: '/dashboard' }
];

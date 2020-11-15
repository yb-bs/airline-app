import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AirlineDashboardComponent } from './airline-dashboard/airline-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AirlineDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

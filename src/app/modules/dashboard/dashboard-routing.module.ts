import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { OverviewComponent } from '../dashboard/components/overview/overview.component';

const routes: Routes = [
  {
  path: '', 
  component: DashboardComponent,
  children: [
    {
      path: 'overview', // child route path
      component: OverviewComponent // child route component that the router renders
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

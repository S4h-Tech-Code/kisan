import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { ProductDetailListComponent } from './components/product-detail-list/product-detail-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { OverviewComponent } from '../home/components/overview/overview.component';
import { ResultsComponent } from './components/results/results.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'overview', // child route path
        component: OverviewComponent // child route component that the router renders
      },
      {
        path: 'products', // child route path
        component: ProductListComponent // child route component that the router renders
      },
      {
        path: 'product-detail', // child route path
        component: ProductDetailListComponent // child route component that the router renders
      },
      {
        path: 'results', // child route path
        component: ResultsComponent // child route component that the router renders
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

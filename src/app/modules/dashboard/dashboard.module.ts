import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { OverviewComponent } from '../dashboard/components/overview/overview.component';
import { FarmerComponent } from './components/farmer/farmer.component';
import { BuyerComponent } from './components/buyer/buyer.component';
import { ResponseComponent } from './components/response/response.component';
import { ResponseCardComponent } from './components/response-card/response-card.component';
import { OfferComponent } from './components/offer/offer.component';


@NgModule({
  declarations: [DashboardComponent, OverviewComponent, FarmerComponent, BuyerComponent, ResponseComponent, ResponseCardComponent, OfferComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }

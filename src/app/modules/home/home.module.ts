import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailListComponent } from './components/product-detail-list/product-detail-list.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OverviewComponent } from '../home/components/overview/overview.component';


@NgModule({
  declarations: [HomeComponent, ProductListComponent, ProductDetailListComponent, OverviewComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule
  ]
})
export class HomeModule { }

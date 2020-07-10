import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  exports: [NavComponent, SideNavComponent],
  declarations: [NavComponent, SideNavComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class SharedModule { }

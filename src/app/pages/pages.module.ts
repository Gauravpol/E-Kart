import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared-files/header/header.component';
import { FooterComponent } from './shared-files/footer/footer.component';
import { DashboardComponent } from './shared-files/dashboard/dashboard.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule {
  constructor(){
    console.warn("pages module loaded");
  }
 }

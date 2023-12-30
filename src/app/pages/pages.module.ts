import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { HeaderComponent } from './shared-component/header/header.component';
import { FooterComponent } from './shared-component/footer/footer.component';
import { DashboardComponent } from './shared-component/dashboard/dashboard.component';
import { CategoryHeaderComponent } from './shared-component/category-header/category-header.component';
import { PagesComponent } from './pages/pages.component';
import { ViewcartComponent } from './shared-component/viewcart/viewcart.component';
import { ElectronicsComponent } from './product/categories/electronics/electronics.component';
import { MensComponent } from './product/categories/mens/mens.component';
import { WomensComponent } from './product/categories/womens/womens.component';
import { HomeFurnitureComponent } from './product/categories/home-furniture/home-furniture.component';
import { SportsBooksComponent } from './product/categories/sports-books/sports-books.component';


@NgModule({
  declarations: [
    PagesComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    ElectronicsComponent,
    CategoryHeaderComponent,
    MensComponent,
    WomensComponent,
    HomeFurnitureComponent,
    SportsBooksComponent,
    ViewcartComponent,
    
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

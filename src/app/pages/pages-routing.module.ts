import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shared-component/dashboard/dashboard.component';
import { PagesComponent } from './pages/pages.component';
import { ViewcartComponent } from './shared-component/viewcart/viewcart.component';
import { ElectronicsComponent } from './product/categories/electronics/electronics.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {path:'',component:PagesComponent,

  children:[
    {path:'Dashboard',component:DashboardComponent},
    {path:'viewCart',component:ViewcartComponent},
    {path:'product-Details',component:ProductDetailsComponent},
    {path:'Electronics',component:ElectronicsComponent},
    {path:'',redirectTo:'/pages/Dashboard',pathMatch:'full'}
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

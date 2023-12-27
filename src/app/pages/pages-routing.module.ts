import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './shared-files/dashboard/dashboard.component';

const routes: Routes = [
  {path:'',component:HomeComponent,

  children:[
    {path:'dashboard',component:DashboardComponent},
    {path:'',redirectTo:'/pages/dashboard',pathMatch:'full'}
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

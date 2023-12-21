import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { ForgetPasswordComponent } from './Auth/forget-password/forget-password.component';
import { SignupComponent } from './Auth/signup/signup.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'ForgetPassword',component:ForgetPasswordComponent},
  {path:'signup',component:SignupComponent},
  // {path:'user',loadChildren:()=>import('').then(m=>m.dashboard)},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'**',redirectTo:'/login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { ForgetPasswordComponent } from './Auth/forget-password/forget-password.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { OtpVerifyComponent } from './Auth/otp-verify/otp-verify.component';
import { ResetPasswordComponent } from './Auth/reset-password/reset-password.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'ForgetPassword',component:ForgetPasswordComponent},
  {path:'signup',component:SignupComponent},
  {path:'verifyOTP',component:OtpVerifyComponent},
  {path:'resetPassword',component:ResetPasswordComponent},
  {path:'pages',loadChildren:()=>import('./pages/pages.module').then(m=>m.PagesModule)},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'**',redirectTo:'/login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

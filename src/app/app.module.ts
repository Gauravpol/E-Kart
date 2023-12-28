import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Auth/login/login.component';
import { ForgetPasswordComponent } from './Auth/forget-password/forget-password.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { OtpVerifyComponent } from './Auth/otp-verify/otp-verify.component';
import { ResetPasswordComponent } from './Auth/reset-password/reset-password.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetPasswordComponent,
    SignupComponent,
    OtpVerifyComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.warn("App module loaded");
    
  }
 }

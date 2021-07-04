import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/User/login/login.component';
import { ForgotPasswordComponent } from './components/User/forgot-password/forgot-password.component';
import { RegistartionComponent } from './components/User/registartion/registartion.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { ResetPasswordComponent } from './components/User/reset-password/reset-password.component';
import { CartComponent } from './components/User/cart/cart.component';
import { WishListComponent } from './components/User/wish-list/wish-list.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ForgotPasswordComponent,
    RegistartionComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    ResetPasswordComponent,
    CartComponent,
    WishListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GoogleMapsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

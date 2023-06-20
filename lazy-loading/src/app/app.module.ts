import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { EmployeeDashboardComponent } from './home/employee-dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { Footer1Component } from './footer1/footer1.component';
import { Home1Module } from './home1/home1.module';
import { InfoModule } from './info/info.module';
import { Contact1Module } from './contact1/contact1.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    EmployeeDashboardComponent,
    HeaderComponent,
    FooterComponent,
    Footer1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    Home1Module,
    InfoModule,
    Contact1Module
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

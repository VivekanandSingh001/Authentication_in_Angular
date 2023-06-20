import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { EmployeeDashboardComponent } from './home/employee-dashboard.component';
import { Home1Component } from './home1/home1.component';
import { Contact12Component } from './contact1/contact12/contact12.component';
import { Info1Component } from './info/info1/info1.component';

const routes: Routes = [
  {path:'',redirectTo:'/signUp',pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'signUp',component:SignUpComponent},
  {path:'dashboard',component:EmployeeDashboardComponent },
  {path:'home',component:Home1Component},
  {path:'contact',component:Contact12Component},
  {path:'info',component:Info1Component},
  {path:'**', component:SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

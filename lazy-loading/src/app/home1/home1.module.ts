import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home1Component } from './home1.component';
import { RouterLink, RouterModule } from '@angular/router';
import { AppModule } from '../app.module';



@NgModule({
  declarations: [
    Home1Component
  ],
  imports: [
    CommonModule,
    RouterModule
    ],
  exports: [
    Home1Component
  ]
})
export class Home1Module { }

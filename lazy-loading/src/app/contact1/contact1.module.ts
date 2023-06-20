import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contact12Component } from './contact12/contact12.component';
import { Home1Module } from '../home1/home1.module';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [
    Contact12Component
  ],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports:[
    Contact12Component
  ]
})
export class Contact1Module { }

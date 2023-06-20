import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Info1Component } from './info1/info1.component';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [
    Info1Component
  ],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports:[Info1Component]
})
export class InfoModule { }

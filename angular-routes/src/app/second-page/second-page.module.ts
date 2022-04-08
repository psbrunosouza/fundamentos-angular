import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondPageRoutingModule } from './second-page-routing.module';
import { SecondPageComponent } from './second-page.component';


@NgModule({
  declarations: [
    SecondPageComponent
  ],
  imports: [
    CommonModule,
    SecondPageRoutingModule
  ]
})
export class SecondPageModule { }

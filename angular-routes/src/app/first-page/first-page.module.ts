import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstPageRoutingModule } from './first-page-routing.module';
import { FirstPageComponent } from './first-page.component';
import { FirstPageComponentExampleComponent } from './first-page-component-example/first-page-component-example.component';


@NgModule({
  declarations: [
    FirstPageComponent,
    FirstPageComponentExampleComponent
  ],
  imports: [
    CommonModule,
    FirstPageRoutingModule
  ]
})
export class FirstPageModule { }



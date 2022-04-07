import {LOCALE_ID, NgModule} from '@angular/core';
import {CommonModule, registerLocaleData} from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {FormsModule} from "@angular/forms";
import localePt from '@angular/common/locales/pt';
import {AppModule} from "../app.module";
import {SquarePipe} from "./pipes/square.pipe";

registerLocaleData(localePt);


@NgModule({
  declarations: [
    DashboardComponent,
    SquarePipe
  ],
  exports: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "pt" }
  ]
})
export class DashboardModule { }

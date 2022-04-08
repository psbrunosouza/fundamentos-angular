import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FirstPageComponent} from "./first-page.component";
import {
  FirstPageComponentExampleComponent
} from "./first-page-component-example/first-page-component-example.component";

const routes: Routes = [
  {
    path: '',
    component: FirstPageComponent,
    children: [
      {
        path: 'first-page-component-example',
        component: FirstPageComponentExampleComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstPageRoutingModule { }

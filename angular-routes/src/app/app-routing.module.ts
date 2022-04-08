import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ComponentExampleComponent} from "./component-example/component-example.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'first-page'
  },
  {
    path: 'first-page',
    pathMatch: 'prefix',
    loadChildren: () => import('./first-page/first-page.module').then(m => m.FirstPageModule)
  },
  {
    path: 'second-page',
    loadChildren: () => import('./second-page/second-page.module').then(m => m.SecondPageModule)
  },
  {
    path: 'component-example/:id',
    component: ComponentExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

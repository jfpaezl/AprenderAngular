import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Proyect002Component } from './proyect002/proyect002.component';
import { Proyecto003Component } from './proyecto003/proyecto003.component';
import { Proyect004Component } from './proyect004/proyect004.component';
import { Proyect005Component } from './proyect005/proyect005.component';
import { Proyect006Component } from './proyect006/proyect006.component';
import { Proyect007Component } from './proyect007/proyect007.component';

const routes: Routes = [
  {
    path: 'Proyect002',
    component: Proyect002Component
  },
  {
    path: 'Proyect003',
    component: Proyecto003Component
  },
  {
    path: 'Proyect004',
    component: Proyect004Component
  },
  {
    path: 'Proyect005',
    component: Proyect005Component
  },
  {
    path: 'Proyect006',
    component: Proyect006Component
  },
  {
    path: 'Proyect007',
    component: Proyect007Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

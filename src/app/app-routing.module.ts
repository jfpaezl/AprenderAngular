import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Proyect002Component } from './proyect002/proyect002.component';
import { Proyecto003Component } from './proyecto003/proyecto003.component';
import { Proyect004Component } from './proyect004/proyect004.component';
import { Proyect005Component } from './proyect005/proyect005.component';
import { Proyect006Component } from './proyect006/proyect006.component';
import { Proyect007Component } from './proyect007/proyect007.component';
import { Proyect008Component } from './proyect008/proyect008.component';
import { Proyect009Component } from './proyect009/proyect009.component';
import { Proyect010Component } from './proyect010/proyect010.component';
import { Proyect012Component } from './proyect012/proyect012.component';
import { Proyect013Component } from './proyect013/proyect013.component';
import { Proyect014Component } from './proyect014/proyect014.component';
import { Proyect015Component } from './proyect015/proyect015.component';

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
  {
    path: 'Proyect008',
    component: Proyect008Component
  },
  {
    path: 'Proyect009',
    component: Proyect009Component
  },
  {
    path: 'Proyect010',
    component: Proyect010Component
  },
  {
    path: 'Proyect012',
    component: Proyect012Component
  },
  {
    path: 'Proyect013',
    component: Proyect013Component
  },
  {
    path: 'Proyect014',
    component: Proyect014Component
  },
  {
    path: 'Proyect015',
    component: Proyect015Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

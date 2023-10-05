import { Component } from '@angular/core';

@Component({
  selector: 'app-proyect008',
  templateUrl: './proyect008.component.html',
  styleUrls: ['./proyect008.component.sass']
})
export class Proyect008Component {
  articulos = [{ codigo: 1, descripcion: 'papas', precio: 10.55 },
  { codigo: 2, descripcion: 'manzanas', precio: 12.10 },
  { codigo: 3, descripcion: 'melon', precio: 52.30 },
  { codigo: 4, descripcion: 'cebollas', precio: 17 },
  { codigo: 5, descripcion: 'calabaza', precio: 20 },
  ];
}

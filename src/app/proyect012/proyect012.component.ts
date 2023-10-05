import { Component, OnInit } from '@angular/core';
import { ArticulosService } from './articulos.service';

@Component({
  selector: 'app-proyect012',
  templateUrl: './proyect012.component.html',
  styleUrls: ['./proyect012.component.sass']
})
export class Proyect012Component implements OnInit{

  articulos: any;

  constructor(private articulosServicio: ArticulosService){}

  ngOnInit(): void {
    this.articulos = this.articulosServicio.retornar();
  }
}

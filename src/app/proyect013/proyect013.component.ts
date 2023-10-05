import { Component, OnInit } from '@angular/core';
import { ArticulosService } from './articulos.service';

@Component({
  selector: 'app-proyect013',
  templateUrl: './proyect013.component.html',
  styleUrls: ['./proyect013.component.sass']
})
export class Proyect013Component implements OnInit {
  articulos: any;
  constructor(private articulosService: ArticulosService) { }

  ngOnInit(): void {
    this.articulosService.retornar()
    .subscribe( result =>  this.articulos = result)
  }
}

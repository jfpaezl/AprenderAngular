import { Component } from '@angular/core';

@Component({
  selector: 'app-proyect014',
  templateUrl: './proyect014.component.html',
  styleUrls: ['./proyect014.component.sass']
})
export class Proyect014Component {
  nombre = 'Juan Carlos';
  saldo = 1000.50;
  dias = ['domingo','lunes','martes','miércoles','jueves','viernes','sábado'];
  articulos = [{
      codigo: 1,
      descripcion: "papas",
      precio: 12.33
    },{
      codigo: 2,
      descripcion: "manzanas",
      precio: 54
    }];
  fechaActual = new Date();
}

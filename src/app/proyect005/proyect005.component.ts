import { Component } from '@angular/core';

@Component({
  selector: 'app-proyect005',
  templateUrl: './proyect005.component.html',
  styleUrls: ['./proyect005.component.scss']
})
export class Proyect005Component {
  mensaje='';

  actualizar(t: number) {
    this.mensaje = t + '(se actualiza cada 10 segundos)';
  }
}

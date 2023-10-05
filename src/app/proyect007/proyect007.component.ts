import { Component, ViewChild } from '@angular/core';
import { Selectornumerico2Component } from './selectornumerico2/selectornumerico2.component';

@Component({
  selector: 'app-proyect007',
  templateUrl: './proyect007.component.html',
  styleUrls: ['./proyect007.component.scss']
})
export class Proyect007Component {
  @ViewChild('selector1') selector1!: Selectornumerico2Component;
  @ViewChild('selector2') selector2!: Selectornumerico2Component;

  fijarSelector1(valor:number) {
    this.selector1.fijar(valor);
  }

  fijarSelector2(valor:number) {
    this.selector2.fijar(valor);
  }
}

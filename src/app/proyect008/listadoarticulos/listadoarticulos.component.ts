import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listadoarticulos',
  templateUrl: './listadoarticulos.component.html',
  styleUrls: ['./listadoarticulos.component.scss']
})
export class ListadoarticulosComponent implements OnInit{
  @Input() datos: any;
  
  ngOnInit(): void {

  }
}

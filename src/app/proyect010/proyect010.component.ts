import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-proyect010',
  templateUrl: './proyect010.component.html',
  styleUrls: ['./proyect010.component.sass']
})
export class Proyect010Component {
  articulos: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("https://scratchya.com.ar/vue/datos.php")
      .subscribe(
        resultado => {
          this.articulos = resultado;
        }
      );
  }
}

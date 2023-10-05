import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Proyect002Component } from './proyect002/proyect002.component';
import { DadoComponent } from './proyecto003/dado/dado.component';
import { Proyecto003Component } from './proyecto003/proyecto003.component';
import { Proyect004Component } from './proyect004/proyect004.component';
import { Dado2Component } from './proyect004/dado2/dado2.component';
import { Proyect005Component } from './proyect005/proyect005.component';
import { CronometroComponent } from './proyect005/cronometro/cronometro.component';

@NgModule({
  declarations: [
    AppComponent,
    Proyect002Component,
    DadoComponent,
    Proyecto003Component,
    Proyect004Component,
    Dado2Component,
    Proyect005Component,
    CronometroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
import { Proyect006Component } from './proyect006/proyect006.component';
import { SelectornumericoComponent } from './proyect006/selectornumerico/selectornumerico.component';
import { Proyect007Component } from './proyect007/proyect007.component';
import { Selectornumerico2Component } from './proyect007/selectornumerico2/selectornumerico2.component';
import { Proyect008Component } from './proyect008/proyect008.component';
import { ListadoarticulosComponent } from './proyect008/listadoarticulos/listadoarticulos.component';
import { ElementosModule } from './proyect009/elementos/elementos.module';
import { Proyect009Component } from './proyect009/proyect009.component';
import { Proyect010Component } from './proyect010/proyect010.component';
import { Proyect012Component } from './proyect012/proyect012.component';
import { Proyect013Component } from './proyect013/proyect013.component';
import { Proyect014Component } from './proyect014/proyect014.component';
import { Proyect015Component } from './proyect015/proyect015.component';
import { LetrasPipe } from './proyect015/letras.pipe';
import { Proyect016Component } from './proyect016/proyect016.component';

@NgModule({
  declarations: [
    AppComponent,
    Proyect002Component,
    DadoComponent,
    Proyecto003Component,
    Proyect004Component,
    Dado2Component,
    Proyect005Component,
    CronometroComponent,
    Proyect006Component,
    SelectornumericoComponent,
    Proyect007Component,
    Selectornumerico2Component,
    Proyect008Component,
    ListadoarticulosComponent,
    Proyect009Component,
    Proyect010Component,
    Proyect012Component,
    Proyect013Component,
    Proyect014Component,
    Proyect015Component,
    LetrasPipe,
    Proyect016Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ElementosModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

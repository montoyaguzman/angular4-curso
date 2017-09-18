import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FrutaComponent } from './components/fruta/fruta.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { HijoComponent } from './components/hijo/hijo.component';

@NgModule({
  declarations: [
    AppComponent, //Aqui se agregan los componentes a la app
    FrutaComponent,
    EmpleadoComponent,
    HijoComponent 	
  ],
  imports: [ //Agregar modulos del framework
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

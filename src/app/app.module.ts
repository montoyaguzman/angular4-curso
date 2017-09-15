import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FrutaComponent } from './components/fruta.component';
import { EmpleadoComponent } from './components/empleado.component';

@NgModule({
  declarations: [
    AppComponent, //Aqui se agregan los componentes a la app
    FrutaComponent,
    EmpleadoComponent 	
  ],
  imports: [ //Agregar modulos del framework
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

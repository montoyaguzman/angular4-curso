import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './components/routing/app.routing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FrutaComponent } from './components/fruta/fruta.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { HijoComponent } from './components/hijo/hijo.component';
import { HomeComponent } from './components/home/home.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { SuperHeroComponent } from './components/superhero/superhero.component';
import { CochesComponent } from './components/coches/coches.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { FormalumnosComponent } from './components/formularioValidado/formalumnos.component';


@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    EmpleadoComponent,
    HijoComponent,
    HomeComponent,
    ContactoComponent,
    SuperHeroComponent,
    FormalumnosComponent,
    CochesComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

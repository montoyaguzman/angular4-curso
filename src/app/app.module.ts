import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing, appRoutingProviders} from './components/routing/app.routing';

import { AppComponent } from './app.component';
import { FrutaComponent } from './components/fruta/fruta.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { HijoComponent } from './components/hijo/hijo.component';
import { HomeComponent } from './components/home/home.component';
import { ContactoComponent } from './components/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    EmpleadoComponent,
    HijoComponent,
    HomeComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

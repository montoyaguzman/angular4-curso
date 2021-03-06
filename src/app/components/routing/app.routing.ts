import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpleadoComponent } from '../empleado/empleado.component';
import { FrutaComponent } from '../fruta/fruta.component';
import { HomeComponent } from '../home/home.component';
import { ContactoComponent } from '../contacto/contacto.component';
import { SuperHeroComponent } from '../superhero/superhero.component';
import { CochesComponent } from '../coches/coches.component';
import { Formulario1Component } from '../formulario1/formulario1.component';
import { Formulario2Component } from '../formulario2/formulario2.component';
import { Formulario3Component } from '../formulario3/formulario3.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'app-home', component: HomeComponent },
  { path: 'app-empleado', component: EmpleadoComponent },
  { path: 'app-fruta', component: FrutaComponent },
  { path: 'app-contacto', component: ContactoComponent },
  { path: 'app-contacto/:page', component: ContactoComponent },
  { path: 'app-superhero', component: SuperHeroComponent },
  { path: 'app-coches', component: CochesComponent },
  { path: 'app-formulario1', component: Formulario1Component },
  { path: 'app-formulario2', component: Formulario2Component },
  { path: 'app-formulario3', component: Formulario3Component },
  // { path: '**', component: HomeComponent }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

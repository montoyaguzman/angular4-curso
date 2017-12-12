import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpleadoComponent } from '../empleado/empleado.component';
import { FrutaComponent } from '../fruta/fruta.component';
import { HomeComponent } from '../home/home.component';
import { ContactoComponent } from '../contacto/contacto.component';
import { SuperHeroComponent } from '../superhero/superhero.component';
import { CochesComponent } from '../coches/coches.component';
import { FormularioComponent } from '../formulario/formulario.component';
import { FormalumnosComponent } from '../formularioValidado/formalumnos.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'app-home', component: HomeComponent},
  {path: 'app-empleado', component: EmpleadoComponent},
  {path: 'app-fruta', component: FrutaComponent},
  {path: 'app-contacto', component: ContactoComponent},
  {path: 'app-contacto/:page', component: ContactoComponent},
  {path: 'app-superhero', component: SuperHeroComponent},
  {path: 'app-formalumnos', component: FormalumnosComponent},
  {path: 'app-coches', component: CochesComponent},
  {path: 'app-formulario', component: FormularioComponent},
  {path: '**', component: HomeComponent}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

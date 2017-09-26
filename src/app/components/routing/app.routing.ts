import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {EmpleadoComponent} from '../empleado/empleado.component';
import {FrutaComponent} from '../fruta/fruta.component';
import {HomeComponent} from '../home/home.component';
import {ContactoComponent} from '../contacto/contacto.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'app-home', component: HomeComponent},
  {path: 'app-empleado', component: EmpleadoComponent},
  {path: 'app-fruta', component: FrutaComponent},
  {path: 'app-contacto', component: ContactoComponent},
  {path: 'app-contacto/:page', component: ContactoComponent},
  {path: '**', component: HomeComponent}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

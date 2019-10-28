import { NgModule }            from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { Bloque20Component } from './bloque20/bloque20.component';
import { AppComponent } from './app.component';
import { PisoComponent } from './piso/piso.component';
import { Piso202Component } from './piso202/piso202.component'
import { Piso203Component } from './piso203/piso203.component'
import { Piso204Component } from './piso204/piso204.component'
import { Piso211Component } from './piso211/piso211.component'
import { Piso212Component } from './piso212/piso212.component'
import { Piso213Component } from './piso213/piso213.component'
import { Piso214Component } from './piso214/piso214.component'

import { MapaComponent } from  './mapa/mapa.component';
import { FullscreenOverlayContainer } from '@angular/cdk/overlay';

const routes: Routes = [
  { path: 'bloque20', component: Bloque20Component },
  { path:'piso', component:PisoComponent},
  { path:'piso202', component:Piso202Component},
  { path:'piso203', component:Piso203Component},
  { path:'piso204', component:Piso204Component},
  { path:'piso211', component:Piso211Component},
  { path:'piso212', component:Piso212Component},
  { path:'piso213', component:Piso213Component},
  { path:'piso214', component:Piso214Component},
  { path: 'mapa', component:MapaComponent},
  {path:'', redirectTo :'/mapa', pathMatch:'full' }

]; 

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],

})
export class AppRoutingModule { }

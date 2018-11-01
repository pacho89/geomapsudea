import { NgModule }            from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Bloque20Component } from './bloque20/bloque20.component';
import { AppComponent } from './app.component';
import { PisoComponent } from './piso/piso.component';
import { MapaComponent } from  './mapa/mapa.component';
import { FullscreenOverlayContainer } from '@angular/cdk/overlay';

const routes: Routes = [
  { path: 'bloque20', component: Bloque20Component },
  { path:'piso', component:PisoComponent},
  { path: 'mapa', component:MapaComponent},
  {path:'', redirectTo :'/mapa', pathMatch:'full' }
]; 

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],

})
export class AppRoutingModule { }

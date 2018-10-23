import { NgModule }            from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Bloque20Component } from './bloque20/bloque20.component';
import { AppComponent } from './app.component';
import { PisoComponent } from './piso/piso.component';

const routes: Routes = [
  { path: 'bloque20', component: Bloque20Component },
  { path:'piso', component:PisoComponent}
]; 

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],

})
export class AppRoutingModule { }

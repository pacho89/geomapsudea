import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AgmOverlays } from "agm-overlays";

import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavUdeaComponent } from './nav-udea/nav-udea.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { AppRoutingModule } from './/app-routing.module';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { PinchZoomModule } from 'ngx-pinch-zoom';
import { Bloque20Component } from './bloque20/bloque20.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalBasic } from './bloque20/modal-basic';
import { PisoComponent } from './piso/piso.component';
import { MapaComponent } from './mapa/mapa.component';


@NgModule({
  imports: [
    BrowserModule,
    NgxImageZoomModule.forRoot(),
    PinchZoomModule,
    CommonModule,
    NgbModule,
    AgmOverlays,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAUreLS2iYwg0xdZTTnufdfmaEdrPaB5t0'
    }),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AppRoutingModule
  ],
  providers: [],
  declarations: [ AppComponent, NavUdeaComponent, Bloque20Component, NgbdModalBasic, PisoComponent, MapaComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
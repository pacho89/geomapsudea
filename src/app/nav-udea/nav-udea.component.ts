import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { google } from '@agm/core/services/google-maps-types';

var historicalOverlay;

@Component({
  selector: 'app-nav-udea',
  templateUrl: './nav-udea.component.html',
  styleUrls: ['./nav-udea.component.css']
})
export class NavUdeaComponent {
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(private breakpointObserver: BreakpointObserver) {}
 
   title: string = 'GeoMapsUdeA';
  
    lat: number = 6.2676;
    lng: number = -75.569;
    zoom: 18;
    image:'/Imagenes/transparente.jp';



    
    /*  var map = new google.maps.Map(document.getElementById('mapa'), {
        zoom: 18,
        center: {lat:6.2676, lng:-75.569}
      });

      var imageBounds = {
        north: 40.773941,
        south: 40.712216,
        east: -74.12544,
        west: -74.22655
      };

      historicalOverlay = new google.maps.GroundOverlay(
          '/Imagenes/transparente.jp',
          imageBounds);
      historicalOverlay.setMap(map);
    
    */

  }




     
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  title: string = 'GeoMapsUdeA';
  lat: number = 6.2676;
  lng: number = -75.569;
  zoom: 18;
}
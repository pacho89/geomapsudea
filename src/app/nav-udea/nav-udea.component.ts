import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

  }

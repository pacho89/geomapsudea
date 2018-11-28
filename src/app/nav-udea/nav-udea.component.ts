import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { google } from '@agm/core/services/google-maps-types';
import { Nivel } from '../nivel'
import { PisosService } from '../pisos.service'
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

var historicalOverlay;



@Component({
  selector: 'app-nav-udea',
  templateUrl: './nav-udea.component.html',
  styleUrls: ['./nav-udea.component.css']
})
export class NavUdeaComponent {
  
  public searching: boolean = false;
  public niveles : Nivel[];
    title: string = 'GeoMapsUdeA';
    lat1: number = 6.2676;
    lng1: number = -75.569;
    zoom: 18;
    lat:any;
    lng:any;


    ngOnInit() {
      this.getPisos();
    }


    getPisos(): void {
      this.pisosService.getPisos().subscribe(niveles => this.niveles=niveles);
   }


    public showSearchResults(event: any): void {
      if (event.target.value.length >= 3) {
        this.searching = true;
      } else {
        this.searching = false;
      }
    }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    closeResult: string;  
  constructor(private pisosService: PisosService,private breakpointObserver: BreakpointObserver, private modalService: NgbModal) {
    if (navigator)
    {
    navigator.geolocation.getCurrentPosition( pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
      });
    }
  }
 
  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  open2(content2:any) {
    this.modalService.open(content2, {ariaLabelledBy: 'modal-basic-title2'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  open3(content3:any) {
    this.modalService.open(content3, {ariaLabelledBy: 'modal-basic-title3'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  open4(content4:any) {
    this.modalService.open(content4, {ariaLabelledBy: 'modal-basic-title4'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

   
    //image:'/Imagenes/transparente.jp';



    
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




     
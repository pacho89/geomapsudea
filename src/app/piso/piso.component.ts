import { Component, OnInit } from '@angular/core';
import { NIVELES } from '../mock-pisos';

@Component({
  selector: 'app-piso',
  templateUrl: './piso.component.html',
  styleUrls: ['./piso.component.css']
})
export class PisoComponent implements OnInit {
  

  niveles = NIVELES;



  constructor() { }

  ngOnInit() {
  }

}

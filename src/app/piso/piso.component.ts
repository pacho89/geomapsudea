import { Component, OnInit } from '@angular/core';
import { PisosService } from '../pisos.service'
import { Nivel } from '../nivel'
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-piso',
  templateUrl: './piso.component.html',
  styleUrls: ['./piso.component.css']
  
})
export class PisoComponent implements OnInit {
  
  niveles : Nivel[];
  closeResult: string;  

  constructor(private pisosService: PisosService,private modalService: NgbModal) { }


  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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
 





  ngOnInit() {
    this.getPisos();
  }

  getPisos(): void {
     this.pisosService.getPisos().subscribe(niveles => this.niveles=niveles);
  }
 
}

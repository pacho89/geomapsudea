import { Injectable } from '@angular/core';
import { Nivel } from './nivel'
import { NIVELES } from './mock-pisos'
import { Observable, of } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class PisosService {

  constructor() { }

  getPisos(): Observable<Nivel[]> {
    return of(NIVELES);
  }

 
}

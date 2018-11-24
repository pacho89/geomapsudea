import { TestBed, inject } from '@angular/core/testing';

import { PisosService } from './pisos.service';

describe('PisosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PisosService]
    });
  });

  it('should be created', inject([PisosService], (service: PisosService) => {
    expect(service).toBeTruthy();
  }));
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bloque20Component } from './bloque20.component';

describe('Bloque20Component', () => {
  let component: Bloque20Component;
  let fixture: ComponentFixture<Bloque20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bloque20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bloque20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

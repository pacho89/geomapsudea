import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Piso212Component } from './piso212.component';

describe('Piso212Component', () => {
  let component: Piso212Component;
  let fixture: ComponentFixture<Piso212Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Piso212Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Piso212Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

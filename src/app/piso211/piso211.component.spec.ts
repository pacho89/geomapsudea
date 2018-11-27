import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Piso211Component } from './piso211.component';

describe('Piso211Component', () => {
  let component: Piso211Component;
  let fixture: ComponentFixture<Piso211Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Piso211Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Piso211Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

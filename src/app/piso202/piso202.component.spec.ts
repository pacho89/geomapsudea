import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Piso202Component } from './piso202.component';

describe('Piso202Component', () => {
  let component: Piso202Component;
  let fixture: ComponentFixture<Piso202Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Piso202Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Piso202Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Piso203Component } from './piso203.component';

describe('Piso203Component', () => {
  let component: Piso203Component;
  let fixture: ComponentFixture<Piso203Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Piso203Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Piso203Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

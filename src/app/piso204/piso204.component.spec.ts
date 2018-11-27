import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Piso204Component } from './piso204.component';

describe('Piso204Component', () => {
  let component: Piso204Component;
  let fixture: ComponentFixture<Piso204Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Piso204Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Piso204Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

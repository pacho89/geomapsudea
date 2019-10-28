import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Piso213Component } from './piso213.component';

describe('Piso213Component', () => {
  let component: Piso213Component;
  let fixture: ComponentFixture<Piso213Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Piso213Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Piso213Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

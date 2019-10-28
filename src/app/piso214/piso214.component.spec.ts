import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Piso214Component } from './piso214.component';

describe('Piso214Component', () => {
  let component: Piso214Component;
  let fixture: ComponentFixture<Piso214Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Piso214Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Piso214Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

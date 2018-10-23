import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PisoComponent } from './piso.component';

describe('PisoComponent', () => {
  let component: PisoComponent;
  let fixture: ComponentFixture<PisoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PisoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

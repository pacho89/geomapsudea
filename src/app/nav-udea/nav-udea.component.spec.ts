
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavUdeaComponent } from './nav-udea.component';

describe('NavUdeaComponent', () => {
  let component: NavUdeaComponent;
  let fixture: ComponentFixture<NavUdeaComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [NavUdeaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavUdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});

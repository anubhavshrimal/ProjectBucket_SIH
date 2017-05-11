import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteNavbarComponent } from './institute-navbar.component';

describe('InstituteNavbarComponent', () => {
  let component: InstituteNavbarComponent;
  let fixture: ComponentFixture<InstituteNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstituteNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituteNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

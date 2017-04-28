import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteProfileComponent } from './institute-profile.component';

describe('InstituteProfileComponent', () => {
  let component: InstituteProfileComponent;
  let fixture: ComponentFixture<InstituteProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstituteProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituteProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

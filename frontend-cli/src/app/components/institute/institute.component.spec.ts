import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteComponent } from './institute.component';

describe('InstituteComponent', () => {
  let component: InstituteComponent;
  let fixture: ComponentFixture<InstituteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstituteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

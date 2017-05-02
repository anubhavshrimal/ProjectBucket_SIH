import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsFeedComponent } from './projects-feed.component';

describe('ProjectsFeedComponent', () => {
  let component: ProjectsFeedComponent;
  let fixture: ComponentFixture<ProjectsFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

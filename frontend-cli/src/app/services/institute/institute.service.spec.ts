import { TestBed, inject } from '@angular/core/testing';

import { InstituteService } from './institute.service';

describe('InstituteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InstituteService]
    });
  });

  it('should be created', inject([InstituteService], (service: InstituteService) => {
    expect(service).toBeTruthy();
  }));
});

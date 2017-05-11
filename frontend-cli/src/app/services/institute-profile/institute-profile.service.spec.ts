import { TestBed, inject } from '@angular/core/testing';

import { InstituteProfileService } from './institute-profile.service';

describe('InstituteProfileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InstituteProfileService]
    });
  });

  it('should be created', inject([InstituteProfileService], (service: InstituteProfileService) => {
    expect(service).toBeTruthy();
  }));
});

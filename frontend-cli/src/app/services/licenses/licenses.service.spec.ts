import { TestBed, inject } from '@angular/core/testing';

import { LicensesService } from './licenses.service';

describe('LicensesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LicensesService]
    });
  });

  it('should be created', inject([LicensesService], (service: LicensesService) => {
    expect(service).toBeTruthy();
  }));
});

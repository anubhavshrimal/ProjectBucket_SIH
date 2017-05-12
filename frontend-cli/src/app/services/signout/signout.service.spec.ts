import { TestBed, inject } from '@angular/core/testing';

import { SignoutService } from './signout.service';

describe('SignoutService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SignoutService]
    });
  });

  it('should be created', inject([SignoutService], (service: SignoutService) => {
    expect(service).toBeTruthy();
  }));
});

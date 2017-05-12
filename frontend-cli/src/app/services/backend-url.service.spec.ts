import { TestBed, inject } from '@angular/core/testing';

import { BackendUrlService } from './backend-url.service';

describe('BackendUrlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BackendUrlService]
    });
  });

  it('should be created', inject([BackendUrlService], (service: BackendUrlService) => {
    expect(service).toBeTruthy();
  }));
});

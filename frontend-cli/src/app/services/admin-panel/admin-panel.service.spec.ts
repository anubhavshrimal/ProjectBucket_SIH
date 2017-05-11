import { TestBed, inject } from '@angular/core/testing';

import { AdminPanelService } from './admin-panel.service';

describe('AdminPanelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminPanelService]
    });
  });

  it('should be created', inject([AdminPanelService], (service: AdminPanelService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { StorageIntegrationService } from './storage-integration.service';

describe('StorageIntegrationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StorageIntegrationService = TestBed.get(StorageIntegrationService);
    expect(service).toBeTruthy();
  });
});

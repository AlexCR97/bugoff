import { TestBed } from '@angular/core/testing';

import { AllService } from './all.service';

describe('AllService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllService = TestBed.get(AllService);
    expect(service).toBeTruthy();
  });
});

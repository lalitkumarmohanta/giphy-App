import { TestBed } from '@angular/core/testing';

import { GpyService } from './gpy.service';

describe('GpyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GpyService = TestBed.get(GpyService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { VeService } from './ve.service';

describe('VeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VeService = TestBed.get(VeService);
    expect(service).toBeTruthy();
  });
});

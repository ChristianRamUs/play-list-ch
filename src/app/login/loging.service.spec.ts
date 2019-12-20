import { TestBed } from '@angular/core/testing';

import { LogingService } from './loging.service';

describe('LogingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogingService = TestBed.get(LogingService);
    expect(service).toBeTruthy();
  });
});

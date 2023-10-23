import { TestBed } from '@angular/core/testing';

import { FindByVinService } from './find-by-vin.service';

describe('FindByVinService', () => {
  let service: FindByVinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindByVinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

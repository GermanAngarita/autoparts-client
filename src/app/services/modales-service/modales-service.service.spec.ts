import { TestBed } from '@angular/core/testing';

import { ModalesServiceService } from './modales-service.service';

describe('ModalesServiceService', () => {
  let service: ModalesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

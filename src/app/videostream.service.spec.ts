import { TestBed } from '@angular/core/testing';

import { VideostreamService } from './videostream.service';

describe('VideostreamService', () => {
  let service: VideostreamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideostreamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

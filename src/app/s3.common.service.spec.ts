import { TestBed } from '@angular/core/testing';

import { S3CommonService } from './s3.common.service';

describe('S3CommonService', () => {
  let service: S3CommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(S3CommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

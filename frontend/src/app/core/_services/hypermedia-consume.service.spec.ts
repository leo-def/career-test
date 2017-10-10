import { TestBed, inject } from '@angular/core/testing';

import { HypermediaConsumeService } from './hypermedia-consume.service';

describe('HypermediaConsumeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HypermediaConsumeService]
    });
  });

  it('should ...', inject([HypermediaConsumeService], (service: HypermediaConsumeService) => {
    expect(service).toBeTruthy();
  }));
});

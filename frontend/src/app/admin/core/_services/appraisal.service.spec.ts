import { TestBed, inject } from '@angular/core/testing';

import { AppraisalService } from './appraisal.service';

describe('AppraisalTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppraisalService]
    });
  });

  it('should ...', inject([AppraisalService], (service: AppraisalService) => {
    expect(service).toBeTruthy();
  }));
});

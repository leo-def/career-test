import { TestBed, inject } from '@angular/core/testing';

import { AppraisalTypeService } from './appraisal-type.service';

describe('AppraisalTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppraisalTypeService]
    });
  });

  it('should ...', inject([AppraisalTypeService], (service: AppraisalTypeService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { SelectOptionService } from './select-option.service';

describe('SelectOptionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectOptionService]
    });
  });

  it('should be created', inject([SelectOptionService], (service: SelectOptionService) => {
    expect(service).toBeTruthy();
  }));
});

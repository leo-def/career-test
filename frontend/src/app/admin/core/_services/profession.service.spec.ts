import { TestBed, inject } from '@angular/core/testing';

import { ProfessionService } from './profession.service';

describe('ProfessionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfessionService]
    });
  });

  it('should ...', inject([ProfessionService], (service: ProfessionService) => {
    expect(service).toBeTruthy();
  }));
});

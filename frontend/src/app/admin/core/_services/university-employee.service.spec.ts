import { TestBed, inject } from '@angular/core/testing';

import { UniversityEmployeeService } from './university-employee.service';

describe('UniversityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UniversityEmployeeService]
    });
  });

  it('should ...', inject([UniversityEmployeeService], (service: UniversityEmployeeService) => {
    expect(service).toBeTruthy();
  }));
});

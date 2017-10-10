import { TestBed, inject } from '@angular/core/testing';

import { QuestionService } from './question.service';

describe('QuestionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionService]
    });
  });

  it('should ...', inject([QuestionService], (service: QuestionService) => {
    expect(service).toBeTruthy();
  }));
});

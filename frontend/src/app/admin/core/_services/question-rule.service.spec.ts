import { TestBed, inject } from '@angular/core/testing';

import { QuestionRuleService } from './question-rule.service';

describe('QuestionRuleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionRuleService]
    });
  });

  it('should ...', inject([QuestionRuleService], (service: QuestionRuleService) => {
    expect(service).toBeTruthy();
  }));
});

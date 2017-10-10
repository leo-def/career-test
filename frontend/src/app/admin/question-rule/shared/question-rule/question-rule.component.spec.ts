import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {  AdminQuestionRuleComponent as QuestionRuleComponent } from './question-rule.component';

describe('QuestionRuleComponent', () => {
  let component: QuestionRuleComponent;
  let fixture: ComponentFixture<QuestionRuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionRuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

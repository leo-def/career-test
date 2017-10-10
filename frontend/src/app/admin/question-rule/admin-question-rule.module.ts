import { NgModule } from '@angular/core';
import { routing } from './admin-question-rule.routing';
import { AdminQuestionRuleSharedModule } from './shared/admin-question-rule-shared.module';

@NgModule({
  imports: [
    AdminQuestionRuleSharedModule,
    routing
  ],
  exports: [
    AdminQuestionRuleSharedModule
  ],
})
export class AdminQuestionRuleModule { }

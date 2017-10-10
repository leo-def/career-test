import { NgModule } from '@angular/core';
import { routing } from '../admin-question-rule.routing';
import { SharedModule } from '../../shared/shared.module';
import { AdminQuestionRuleListComponent } from './list/list.component';
import { AdminQuestionRuleShowComponent } from './show/show.component';
import { AdminQuestionRuleFormComponent } from './form/form.component';
import { AdminQuestionRuleComponent } from './question-rule/question-rule.component';
import { AdminQuestionRuleNewComponent } from './new/new.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  exports: [
    SharedModule,
    AdminQuestionRuleListComponent,
    AdminQuestionRuleShowComponent,
    AdminQuestionRuleFormComponent,
    AdminQuestionRuleComponent,
    AdminQuestionRuleNewComponent,
  ],
  declarations: [
    AdminQuestionRuleListComponent,
    AdminQuestionRuleShowComponent,
    AdminQuestionRuleFormComponent,
    AdminQuestionRuleComponent,
    AdminQuestionRuleNewComponent,
  ]
})
export class AdminQuestionRuleSharedModule { }

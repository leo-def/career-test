import { NgModule } from '@angular/core';
import { routing } from './admin-question.routing';
import { AdminQuestionSharedModule } from './shared/admin-question-shared.module';

@NgModule({
  imports: [
    AdminQuestionSharedModule,
    routing
  ],
  exports: [
    AdminQuestionSharedModule,
  ],
})
export class AdminQuestionModule { }

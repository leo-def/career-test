import { NgModule } from '@angular/core';
import { routing } from '../admin-question.routing';
import { SharedModule } from '../../shared/shared.module';
import { AdminQuestionListComponent } from './list/list.component';
import { AdminQuestionShowComponent } from './show/show.component';
import { AdminQuestionFormComponent } from './form/form.component';
import { AdminQuestionComponent } from './question/question.component';
import { AdminQuestionNewComponent } from './new/new.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  exports: [
    SharedModule,
    AdminQuestionListComponent,
    AdminQuestionShowComponent,
    AdminQuestionFormComponent,
    AdminQuestionComponent,
    AdminQuestionNewComponent,
  ],
  declarations: [
    AdminQuestionListComponent,
    AdminQuestionShowComponent,
    AdminQuestionFormComponent,
    AdminQuestionComponent,
    AdminQuestionNewComponent,
  ]
})
export class AdminQuestionSharedModule { }

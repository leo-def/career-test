import { NgModule } from '@angular/core';
import { routing } from '../admin-appraisal-type.routing';
import { SharedModule } from '../../shared/shared.module';
import { AdminAppraisalTypeListComponent } from './list/list.component';
import { AdminAppraisalTypeShowComponent } from './show/show.component';
import { AdminAppraisalTypeFormComponent } from './form/form.component';
import { AdminAppraisalTypeComponent } from './appraisal-type/appraisal-type.component';
import { AdminAppraisalTypeNewComponent } from './new/new.component';
import { AdminQuestionSharedModule } from '../../question/shared/admin-question-shared.module';
import { AdminAppraisalSharedModule } from '../../appraisal/shared/admin-appraisal-shared.module';

@NgModule({
  imports: [
    SharedModule,
    AdminQuestionSharedModule,
    AdminAppraisalSharedModule,
  ],
  exports: [
    SharedModule,
    AdminAppraisalTypeListComponent,
    AdminAppraisalTypeShowComponent,
    AdminAppraisalTypeFormComponent,
    AdminAppraisalTypeComponent,
    AdminAppraisalTypeNewComponent,
  ],
  declarations: [
    AdminAppraisalTypeListComponent,
    AdminAppraisalTypeShowComponent,
    AdminAppraisalTypeFormComponent,
    AdminAppraisalTypeComponent,
    AdminAppraisalTypeNewComponent,
  ]
})
export class AdminAppraisalTypeSharedModule { }

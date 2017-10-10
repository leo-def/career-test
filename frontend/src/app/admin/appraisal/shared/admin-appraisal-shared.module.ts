import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AdminAppraisalListComponent } from './list/list.component';
import { AdminAppraisalShowComponent } from './show/show.component';
import { AdminAppraisalFormComponent } from './form/form.component';
import { AdminAppraisalComponent } from './appraisal/appraisal.component';
import { AdminAppraisalNewComponent } from './new/new.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  exports: [
    SharedModule,
    AdminAppraisalListComponent,
    AdminAppraisalShowComponent,
    AdminAppraisalFormComponent,
    AdminAppraisalComponent,
    AdminAppraisalNewComponent,
  ],
  declarations: [
    AdminAppraisalListComponent,
    AdminAppraisalShowComponent,
    AdminAppraisalFormComponent,
    AdminAppraisalComponent,
    AdminAppraisalNewComponent,
  ]
})
export class AdminAppraisalSharedModule { }

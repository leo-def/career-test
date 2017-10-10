import { NgModule } from '@angular/core';
import { routing } from './admin-appraisal-type.routing';
import { SharedModule } from '../shared/shared.module';
import { AdminAppraisalTypeSharedModule } from './shared/admin-appraisal-type-shared.module';

@NgModule({
  imports: [
    AdminAppraisalTypeSharedModule,
    routing,
  ],
  exports: [
    AdminAppraisalTypeSharedModule,
  ],

})
export class AdminAppraisalTypeModule { }

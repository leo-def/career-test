import { NgModule } from '@angular/core';
import { routing } from './admin-appraisal.routing';
import { AdminAppraisalSharedModule } from './shared/admin-appraisal-shared.module';

@NgModule({
  imports: [
    AdminAppraisalSharedModule,
    routing
  ],
  exports: [
    AdminAppraisalSharedModule,
  ],
})
export class AdminAppraisalModule { }

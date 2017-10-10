import { NgModule } from '@angular/core';
import { routing } from './admin-university-employee.routing';
import { AdminUniversityEmployeeSharedModule } from './shared/admin-university-employee-shared.module';

@NgModule({
  imports: [
    AdminUniversityEmployeeSharedModule,
    routing,
  ],
  exports: [
    AdminUniversityEmployeeSharedModule,
  ],
})
export class AdminUniversityEmployeeModule { }

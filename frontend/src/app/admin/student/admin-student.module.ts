import { NgModule } from '@angular/core';
import { routing } from './admin-student.routing';
import { AdminStudentSharedModule } from './shared/admin-student-shared.module';

@NgModule({
  imports: [
    AdminStudentSharedModule,
    routing
  ],
  exports: [
    AdminStudentSharedModule
  ],
})
export class AdminStudentModule { }

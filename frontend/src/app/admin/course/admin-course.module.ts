import { NgModule } from '@angular/core';
import { routing } from './admin-course.routing';
import { AdminCourseSharedModule } from './shared/admin-course-shared.module';

@NgModule({
  imports: [
    AdminCourseSharedModule,
    routing
  ],
  exports: [
    AdminCourseSharedModule,
  ],
})
export class AdminCourseModule { }

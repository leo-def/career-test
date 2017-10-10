import { NgModule } from '@angular/core';
import { routing } from '../admin-course.routing';
import { SharedModule } from '../../shared/shared.module';
import { AdminCourseListComponent } from './list/list.component';
import { AdminCourseShowComponent } from './show/show.component';
import { AdminCourseFormComponent } from './form/form.component';
import { AdminCourseComponent } from './course/course.component';
import { AdminCourseNewComponent } from './new/new.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  exports: [
    SharedModule,
    AdminCourseListComponent,
    AdminCourseShowComponent,
    AdminCourseFormComponent,
    AdminCourseComponent,
    AdminCourseNewComponent,
  ],
  declarations: [
    AdminCourseListComponent,
    AdminCourseShowComponent,
    AdminCourseFormComponent,
    AdminCourseComponent,
    AdminCourseNewComponent,
  ]
})
export class AdminCourseSharedModule { }

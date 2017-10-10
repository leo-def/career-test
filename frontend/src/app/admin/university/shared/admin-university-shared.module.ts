import { NgModule } from '@angular/core';
import { routing } from '../admin-university.routing';
import { SharedModule } from '../../shared/shared.module';
import { AdminUniversityListComponent } from './list/list.component';
import { AdminUniversityShowComponent } from './show/show.component';
import { AdminUniversityFormComponent } from './form/form.component';
import { AdminUniversityComponent } from './university/university.component';
import { AdminUniversityNewComponent } from './new/new.component';
import { AdminCourseSharedModule } from '../../course/shared/admin-course-shared.module';

@NgModule({
  imports: [
    SharedModule,
    AdminCourseSharedModule,
  ],
  exports: [
    SharedModule,
    AdminUniversityListComponent,
    AdminUniversityShowComponent,
    AdminUniversityFormComponent,
    AdminUniversityComponent,
    AdminUniversityNewComponent,
  ],
  declarations: [
    AdminUniversityListComponent,
    AdminUniversityShowComponent,
    AdminUniversityFormComponent,
    AdminUniversityComponent,
    AdminUniversityNewComponent,
  ]
})
export class AdminUniversitySharedModule { }

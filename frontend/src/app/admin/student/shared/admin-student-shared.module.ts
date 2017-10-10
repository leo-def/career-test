import { NgModule } from '@angular/core';
import { routing } from '../admin-student.routing';
import { SharedModule } from '../../shared/shared.module';
import { AdminStudentListComponent } from './list/list.component';
import { AdminStudentShowComponent } from './show/show.component';
import { AdminStudentFormComponent } from './form/form.component';
import { AdminStudentComponent } from './student/student.component';
import { AdminStudentNewComponent } from './new/new.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  exports: [
    SharedModule,
    AdminStudentListComponent,
    AdminStudentShowComponent,
    AdminStudentFormComponent,
    AdminStudentComponent,
    AdminStudentNewComponent,
  ],
  declarations: [
    AdminStudentListComponent,
    AdminStudentShowComponent,
    AdminStudentFormComponent,
    AdminStudentComponent,
    AdminStudentNewComponent,
  ]
})
export class AdminStudentSharedModule { }

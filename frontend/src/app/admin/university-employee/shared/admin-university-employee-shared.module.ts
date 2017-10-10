import { NgModule } from '@angular/core';
import { routing } from '../admin-university-employee.routing';
import { SharedModule } from '../../shared/shared.module';
import { AdminUniversityEmployeeListComponent } from './list/list.component';
import { AdminUniversityEmployeeShowComponent } from './show/show.component';
import { AdminUniversityEmployeeFormComponent } from './form/form.component';
import { AdminUniversityEmployeeComponent } from './university-employee/university-employee.component';
import { AdminUniversityEmployeeNewComponent } from './new/new.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  exports: [
    SharedModule,
    AdminUniversityEmployeeListComponent,
    AdminUniversityEmployeeShowComponent,
    AdminUniversityEmployeeFormComponent,
    AdminUniversityEmployeeComponent,
    AdminUniversityEmployeeNewComponent,
  ],
  declarations: [
    AdminUniversityEmployeeListComponent,
    AdminUniversityEmployeeShowComponent,
    AdminUniversityEmployeeFormComponent,
    AdminUniversityEmployeeComponent,
    AdminUniversityEmployeeNewComponent,
  ]
})
export class AdminUniversityEmployeeSharedModule { }

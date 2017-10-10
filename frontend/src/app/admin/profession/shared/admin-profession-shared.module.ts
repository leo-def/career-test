import { NgModule } from '@angular/core';
import { routing } from '../admin-profession.routing';
import { SharedModule } from '../../shared/shared.module';
import { AdminProfessionListComponent } from './list/list.component';
import { AdminProfessionShowComponent } from './show/show.component';
import { AdminProfessionFormComponent } from './form/form.component';
import { AdminProfessionComponent } from './profession/profession.component';
import { AdminProfessionNewComponent } from './new/new.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  exports: [
    SharedModule,
    AdminProfessionListComponent,
    AdminProfessionShowComponent,
    AdminProfessionFormComponent,
    AdminProfessionComponent,
    AdminProfessionNewComponent,
  ],
  declarations: [
    AdminProfessionListComponent,
    AdminProfessionShowComponent,
    AdminProfessionFormComponent,
    AdminProfessionComponent,
    AdminProfessionNewComponent,
  ]
})
export class AdminProfessionSharedModule { }

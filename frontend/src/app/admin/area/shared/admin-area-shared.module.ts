import { NgModule } from '@angular/core';
import { routing } from '../admin-area.routing';
import { SharedModule } from '../../shared/shared.module';
import { AdminAreaListComponent } from './list/list.component';
import { AdminAreaShowComponent } from './show/show.component';
import { AdminAreaFormComponent } from './form/form.component';
import { AdminAreaComponent } from './area/area.component';
import { AdminAreaNewComponent } from './new/new.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  exports: [
    SharedModule,
    AdminAreaListComponent,
    AdminAreaShowComponent,
    AdminAreaFormComponent,
    AdminAreaComponent,
    AdminAreaNewComponent,
  ],
  declarations: [
    AdminAreaListComponent,
    AdminAreaShowComponent,
    AdminAreaFormComponent,
    AdminAreaComponent,
    AdminAreaNewComponent,
  ]
})
export class AdminAreaSharedModule { }

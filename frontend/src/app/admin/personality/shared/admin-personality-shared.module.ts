import { NgModule } from '@angular/core';
import { routing } from '../admin-personality.routing';
import { SharedModule } from '../../shared/shared.module';
import { AdminPersonalityListComponent } from './list/list.component';
import { AdminPersonalityShowComponent } from './show/show.component';
import { AdminPersonalityFormComponent } from './form/form.component';
import { AdminPersonalityComponent } from './personality/personality.component';
import { AdminPersonalityNewComponent } from './new/new.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  exports: [
    SharedModule,
    AdminPersonalityListComponent,
    AdminPersonalityShowComponent,
    AdminPersonalityFormComponent,
    AdminPersonalityComponent,
    AdminPersonalityNewComponent,
  ],
  declarations: [
    AdminPersonalityListComponent,
    AdminPersonalityShowComponent,
    AdminPersonalityFormComponent,
    AdminPersonalityComponent,
    AdminPersonalityNewComponent,
  ]
})
export class AdminPersonalitySharedModule { }

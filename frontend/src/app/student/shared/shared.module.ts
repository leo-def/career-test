import { NgModule } from '@angular/core';
import { SharedModule as MainSharedModule} from '../../shared/shared.module';
import {StudentPublicHeaderComponent} from './public-header/student-public-header.component';
import {StudentUserHeaderComponent} from './user-header/student-user-header.component';

@NgModule({
  imports: [
    MainSharedModule
  ],
  exports: [
    MainSharedModule,
    StudentPublicHeaderComponent,
    StudentUserHeaderComponent,
  ],
  declarations: [
    StudentPublicHeaderComponent,
    StudentUserHeaderComponent,
  ]
})
export class SharedModule { }

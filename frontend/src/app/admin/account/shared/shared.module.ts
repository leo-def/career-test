import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule as StudentSharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    StudentSharedModule,
  ],
  exports: [
    StudentSharedModule,
  ],
  declarations: []
})
export class SharedModule { }

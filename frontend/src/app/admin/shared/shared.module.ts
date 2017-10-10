import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { SharedModule as MainSharedModule} from '../../shared/shared.module';
import { AdminHeaderComponent } from './admin-header/admin-header.component';

@NgModule({
  imports: [
    MainSharedModule,
    RouterModule
  ],
  exports: [
    MainSharedModule,
    AdminHeaderComponent,
  ],
  declarations: [
    AdminHeaderComponent,
  ]
})
export class SharedModule { }

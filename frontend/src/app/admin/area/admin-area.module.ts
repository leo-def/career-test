import { NgModule } from '@angular/core';
import { routing } from './admin-area.routing';
import { SharedModule } from '../shared/shared.module';
import { AdminAreaSharedModule } from './shared/admin-area-shared.module';

@NgModule({
  imports: [
    AdminAreaSharedModule,
    routing,
  ],
  exports: [
    AdminAreaSharedModule,
  ],
})
export class AdminAreaModule { }

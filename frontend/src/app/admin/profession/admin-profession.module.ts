import { NgModule } from '@angular/core';
import { routing } from './admin-profession.routing';
import { AdminProfessionSharedModule } from './shared/admin-profession-shared.module';

@NgModule({
  imports: [
    AdminProfessionSharedModule,
    routing,
  ],
  exports: [
    AdminProfessionSharedModule,
  ],
})
export class AdminProfessionModule { }

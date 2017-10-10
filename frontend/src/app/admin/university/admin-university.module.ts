import { NgModule } from '@angular/core';
import { routing } from './admin-university.routing';
import { AdminUniversitySharedModule } from './shared/admin-university-shared.module';

@NgModule({
  imports: [
    AdminUniversitySharedModule,
    routing
  ],
  exports: [
    AdminUniversitySharedModule
  ],
})
export class AdminUniversityModule { }

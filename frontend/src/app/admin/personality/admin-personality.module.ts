import { NgModule } from '@angular/core';
import { routing } from './admin-personality.routing';
import { AdminPersonalitySharedModule } from './shared/admin-personality-shared.module';

@NgModule({
  imports: [
    AdminPersonalitySharedModule,
    routing
  ],
  exports: [
    AdminPersonalitySharedModule,
  ],
})
export class AdminPersonalityModule { }

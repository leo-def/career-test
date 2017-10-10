import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { AdminComponent } from './admin.component';
import { routing } from './admin.routing';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    SharedModule,    
    CoreModule.forRoot(),
	  routing
  ],
  exports: [
    SharedModule,
  ],
  declarations: [AdminComponent]
})
export class AdminModule { }

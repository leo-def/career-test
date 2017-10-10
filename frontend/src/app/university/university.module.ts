import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { UniversityComponent } from './university.component';
import { routing } from './university.routing';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
@NgModule({
  imports: [
    CoreModule.forRoot(),
	routing
  ],
  exports: [
    SharedModule,
  ],
  declarations: [UniversityComponent, HomeComponent]
})
export class UniversityModule { }

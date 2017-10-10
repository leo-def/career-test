import { NgModule } from '@angular/core';
import { StudentComponent } from './student.component';
import { routing } from './student.routing';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';


@NgModule({
  imports: [
    SharedModule,
    CoreModule.forRoot(),
	  routing,
  ],
  exports: [
    SharedModule,
  ],
  declarations: [StudentComponent, HomeComponent, DashboardComponent, ProfileComponent]
})
export class StudentModule { }

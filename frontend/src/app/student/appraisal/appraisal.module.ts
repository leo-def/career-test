import { NgModule } from '@angular/core';
import { ExecuteComponent } from './execute/execute.component';
import { ShowComponent } from './show/show.component';
import { routing } from './appraisal.routing';
@NgModule({
  imports: [
	  routing,
  ],
  declarations: [
      ExecuteComponent,
      ShowComponent
    ]
})
export class AppraisalModule { }

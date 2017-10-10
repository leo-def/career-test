import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AdminAppraisalComponent } from './shared/appraisal/appraisal.component';
import { AdminAppraisalShowComponent } from './shared/show/show.component';
const routes: Routes = [
  //{ path: '', loadChildren: 'admin/appraisal/appraisal.module#AppraisalModule'},
	{ path: '', component: AdminAppraisalComponent },
	//{	path: ':id', component: ShowComponent},
	//{ path: '/edit/:id'}
  //{ path: 'eager', component: EagerComponent },
]
export const routing: ModuleWithProviders = RouterModule.forChild(routes);

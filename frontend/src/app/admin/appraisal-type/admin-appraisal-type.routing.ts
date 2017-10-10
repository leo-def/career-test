import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AdminAppraisalTypeComponent } from './shared/appraisal-type/appraisal-type.component';
import { AdminAppraisalTypeShowComponent } from './shared/show/show.component';
const routes: Routes = [
  //{ path: '', loadChildren: 'admin/appraisalType/appraisalType.module#AppraisalTypeModule'},
	{ path: '', component: AdminAppraisalTypeComponent },
	//{	path: ':id', component: ShowComponent},
	//{ path: '/edit/:id'}
  //{ path: 'eager', component: EagerComponent },
]
export const routing: ModuleWithProviders = RouterModule.forChild(routes);

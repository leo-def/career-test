import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AdminUniversityEmployeeComponent } from './shared/university-employee/university-employee.component';
import { AdminUniversityEmployeeShowComponent } from './shared/show/show.component';
const routes: Routes = [
  //{ path: '', loadChildren: 'admin/university-employee/university-employee.module#UniversityEmployeeModule'},
	{ path: '', component: AdminUniversityEmployeeComponent },
	//{	path: ':id', component: ShowComponent},
	//{ path: '/edit/:id'}
  //{ path: 'eager', component: EagerComponent },
]
export const routing: ModuleWithProviders = RouterModule.forChild(routes);

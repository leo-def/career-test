import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {AdminStudentComponent} from './shared/student/student.component';
import {AdminStudentShowComponent} from './shared/show/show.component';
const routes: Routes = [
  //{ path: '', loadChildren: 'admin/student/student.module#StudentModule'},
	{ path: '', component: AdminStudentComponent },
	//{	path: ':id', component: ShowComponent},
	//{ path: '/edit/:id'}
  //{ path: 'eager', component: EagerComponent },
]
export const routing: ModuleWithProviders = RouterModule.forChild(routes);

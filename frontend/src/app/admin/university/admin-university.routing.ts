import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {AdminUniversityComponent} from './shared/university/university.component';
import {AdminUniversityShowComponent} from './shared/show/show.component';
const routes: Routes = [
  //{ path: '', loadChildren: 'admin/university/university.module#UniversityModule'},
	{ path: '', component: AdminUniversityComponent },
	//{	path: ':id', component: ShowComponent},
	//{ path: '/edit/:id'}
  //{ path: 'eager', component: EagerComponent },
]
export const routing: ModuleWithProviders = RouterModule.forChild(routes);

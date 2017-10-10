import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AdminProfessionComponent } from './shared/profession/profession.component';
import { AdminProfessionShowComponent } from './shared/show/show.component';

const routes: Routes = [
  //{ path: '', loadChildren: 'admin/profession/profession.module#ProfessionModule'},
	{ path: '', component: AdminProfessionComponent },
	//{	path: ':id', component: ShowComponent},
	//{ path: '/edit/:id'}
  //{ path: 'eager', component: EagerComponent },
]
export const routing: ModuleWithProviders = RouterModule.forChild(routes);

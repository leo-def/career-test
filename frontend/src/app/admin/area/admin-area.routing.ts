import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {AdminAreaComponent} from './shared/area/area.component';
import {AdminAreaShowComponent} from './shared/show/show.component';
const routes: Routes = [
  //{ path: '', loadChildren: 'admin/area/area.module#AreaModule'},
	{ path: '', component: AdminAreaComponent },
	//{	path: ':id', component: ShowComponent},
	//{ path: '/edit/:id'}
  //{ path: 'eager', component: EagerComponent },
]
export const routing: ModuleWithProviders = RouterModule.forChild(routes);

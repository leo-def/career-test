import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {AdminPersonalityComponent} from './shared/personality/personality.component';
import {AdminPersonalityShowComponent} from './shared/show/show.component';

const routes: Routes = [
  //{ path: '', loadChildren: 'admin/personality/personality.module#PersonalityModule'},
	{ path: '', component: AdminPersonalityComponent },
	//{	path: ':id', component: ShowComponent},
	//{ path: '/edit/:id'}
  //{ path: 'eager', component: EagerComponent },
]
export const routing: ModuleWithProviders = RouterModule.forChild(routes);

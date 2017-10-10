import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {AdminCourseComponent} from './shared/course/course.component';
import {AdminCourseShowComponent} from './shared/show/show.component';
const routes: Routes = [
  //{ path: '', loadChildren: 'admin/course/course.module#CourseModule'},
	{ path: '', component: AdminCourseComponent },
	//{	path: ':id', component: ShowComponent},
	//{ path: '/edit/:id'}
  //{ path: 'eager', component: EagerComponent },
]
export const routing: ModuleWithProviders = RouterModule.forChild(routes);

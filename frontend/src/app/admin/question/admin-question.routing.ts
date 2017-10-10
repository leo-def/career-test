import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {AdminQuestionComponent} from './shared/question/question.component';
import {AdminQuestionShowComponent} from './shared/show/show.component';
const routes: Routes = [
  //{ path: '', loadChildren: 'admin/question/question.module#QuestionModule'},
	{ path: '', component: AdminQuestionComponent },
	//{	path: ':id', component: ShowComponent},
	//{ path: '/edit/:id'}
  //{ path: 'eager', component: EagerComponent },
]
export const routing: ModuleWithProviders = RouterModule.forChild(routes);

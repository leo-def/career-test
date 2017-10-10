import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AdminQuestionRuleComponent } from './shared/question-rule/question-rule.component';
import { AdminQuestionRuleShowComponent } from './shared/show/show.component';
const routes: Routes = [
  //{ path: '', loadChildren: 'admin/questionRule/questionRule.module#QuestionRuleModule'},
	{ path: '', component: AdminQuestionRuleComponent },
	//{	path: ':id', component: ShowComponent},
	//{ path: '/edit/:id'}
  //{ path: 'eager', component: EagerComponent },
]
export const routing: ModuleWithProviders = RouterModule.forChild(routes);

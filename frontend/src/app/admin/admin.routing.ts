import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {AdminComponent} from './admin.component';

const routes: Routes = [
  { path: '',
    component: AdminComponent,
    data: [{admin_root:true}],
    pathMatch: 'full' },

  { path: 'appraisal-type',
    component: AdminComponent,
    data: [{admin_root:false}],
    loadChildren: './appraisal-type/admin-appraisal-type.module#AdminAppraisalTypeModule'},

  { path: 'area',
    component: AdminComponent,
    data: [{admin_root:false}],
    loadChildren: './area/admin-area.module#AdminAreaModule'},

  { path: 'course',
    component: AdminComponent,
    data: [{admin_root:false}],
    loadChildren: './course/admin-course.module#AdminCourseModule'},

  { path: 'personality',
    component: AdminComponent,
    data: [{admin_root:false}],
    loadChildren: './personality/admin-personality.module#AdminPersonalityModule'},

  { path: 'profession',
    component: AdminComponent,
    data: [{admin_root:false}],
    loadChildren: './profession/admin-profession.module#AdminProfessionModule'},

  { path: 'question',
    component: AdminComponent,
    data: [{admin_root:false}],
     loadChildren: './question/admin-question.module#AdminQuestionModule'},

  { path: 'question-rule',
    component: AdminComponent,
    data: [{admin_root:false}],
    loadChildren: './question-rule/admin-question-rule.module#AdminQuestionRuleModule'},

  { path: 'student',
    component: AdminComponent, 
    data: [{admin_root:false}],
    loadChildren: './student/admin-student.module#AdminStudentModule'},

  { path: 'university',
    component: AdminComponent, 
    data: [{admin_root:false}], 
    loadChildren: './university/admin-university.module#AdminUniversityModule'},

  { path: 'account', 
    component: AdminComponent, 
    data: [{admin_root:false}], 
    loadChildren: './account/admin-account.module#AdminAccountModule'},
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);


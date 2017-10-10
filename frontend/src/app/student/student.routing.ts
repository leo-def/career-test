import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { StudentComponent } from './student.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  //home  = '/'
  //student = '/student'
  { path: '', component: StudentComponent, data: [{student_root:true}]},
	
  //student-dashboard = '/student/dashboard'
  { path: 'dashboard', component: StudentComponent, data: [{student_root:true}], children: [ { path: '', component: DashboardComponent }] },
		
  //student = '/student/profile'
   { path: 'profile', component: StudentComponent, data: [{student_root:false}], children: [ { path: '',  component: ProfileComponent }] },

  //student-home = '/student/home'
  { path: 'home', component: StudentComponent, data: [{student_root:false}], children: [ { path: '',  component: HomeComponent }] },
		
  { path: 'appraisal', component: StudentComponent, data: [{student_root:false}], loadChildren: './appraisal/appraisal.module#AppraisalModule'},
  
  { path: 'account', component: StudentComponent, data: [{student_root:false}], loadChildren: './account/student-account.module#StudentAccountModule'},
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
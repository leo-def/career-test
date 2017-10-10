import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo :'student', pathMatch: 'full' },
  { path: 'student', loadChildren: './student/student.module#StudentModule'},
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
  { path: 'university', loadChildren: './university/university.module#UniversityModule'},
  //{ path: 'eager', component: EagerComponent },
]
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

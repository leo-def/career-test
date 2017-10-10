import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ExecuteComponent } from './execute/execute.component';
import { ShowComponent } from './show/show.component';

const routes: Routes = [

    { path: '', component: ExecuteComponent},
    
    { path: ':token', component: ShowComponent},
  ];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
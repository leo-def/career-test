import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthComponent } from './auth/auth.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [

    { path: '', component: AuthComponent},
    
    { path: 'logout', component: AuthComponent, data: [{logout:true}] },

    { path: 'forgot-password', component: ForgotPasswordComponent},

    { path: 'login', component: AuthComponent},
    
    { path: 'reset-password/:token', component: ResetPasswordComponent},
  ];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
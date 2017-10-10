import { NgModule } from '@angular/core';
import { routing } from './admin-account.routing';
import { SharedModule } from './shared/shared.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthComponent } from './auth/auth.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  imports: [
    SharedModule,
	  routing,
  ],
  exports: [
    SharedModule,
  ],
  declarations: [
    ForgotPasswordComponent,
    AuthComponent,
    ResetPasswordComponent,
  ]
})
export class AdminAccountModule { }

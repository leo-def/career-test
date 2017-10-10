import { NgModule } from '@angular/core';
import { routing } from './student-account.routing';
import { SharedModule } from './shared/shared.module';
import { ConfirmAccountComponent } from './confirm-account/confirm-account.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './register/register.component';
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
    ConfirmAccountComponent,
    ForgotPasswordComponent,
    AuthComponent,
    RegisterComponent,
    ResetPasswordComponent,
  ]
})
export class StudentAccountModule { }

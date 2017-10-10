import { NgModule, Optional, SkipSelf,ModuleWithProviders } from '@angular/core';
import { StudentAccountService } from '../core/_services/account.service';
import { DatePipe } from '@angular/common';

@NgModule({
  imports: [
  ],
  providers : [
    StudentAccountService,
    DatePipe,
  ],
  declarations: []
})
export class CoreModule {
  
    constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
      if (parentModule) {
        throw new Error(
          'CoreModule is already loaded. Import it in the AppModule only');
      }
    }

    static forRoot(): ModuleWithProviders {
      return {
        ngModule: CoreModule,
        providers: [
        ]
      };
    }
}

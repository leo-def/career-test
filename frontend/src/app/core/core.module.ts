import { NgModule, Optional, SkipSelf,ModuleWithProviders } from '@angular/core';
//Services
import { HypermediaConsumeService } from './_services/hypermedia-consume.service';
import { MessageService } from './_services/message.service';
import { SelectOptionService } from './_services/select-option.service';
import { AuthService } from './_services/auth.service';

//Modules
import { HttpModule } from '@angular/http';
import { CommonModule }      from '@angular/common';

@NgModule({
  imports: [
    HttpModule,
    CommonModule,
  ],
  exports: [
    HttpModule
  ],
  declarations: [],
  providers: [
    HypermediaConsumeService,
    MessageService,
    SelectOptionService,
    AuthService,
  ]
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
       HypermediaConsumeService //useValue: {}
    ]
  };
}
}
/*
  static forRoot(config: UserServiceConfig): ModuleWithProviders {
  return {
    ngModule: CoreModule,
    providers: [
      {provide: UserServiceConfig, useValue: config }
    ]
  };
}
*/

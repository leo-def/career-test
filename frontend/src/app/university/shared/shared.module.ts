import { NgModule } from '@angular/core';
import { SharedModule as MainSharedModule} from '../../shared/shared.module';
import {PublicHeaderComponent} from './public-header/public-header.component';
import {UserHeaderComponent} from './user-header/user-header.component';

@NgModule({
  imports: [
    MainSharedModule
  ],
  exports: [
    MainSharedModule,
    PublicHeaderComponent,
    UserHeaderComponent,
  ],
  declarations: [
    PublicHeaderComponent,
    UserHeaderComponent,
  ]
})
export class SharedModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { routing } from './app.routing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule.forRoot(),
	BrowserAnimationsModule,
    BrowserModule,
    SharedModule,
	routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

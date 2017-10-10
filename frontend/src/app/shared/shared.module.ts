import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImportMaterialComponentsModule } from './import-material-components/import-material-components.module';
import { SelectOptionsComponent } from './select-options/select-options.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ImportMaterialComponentsModule,
    FlexLayoutModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ImportMaterialComponentsModule,
    SelectOptionsComponent,
    FlexLayoutModule,
    RouterModule,
  ],
  declarations: [
    SelectOptionsComponent
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreePartsComponent } from './tree-parts.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    TreePartsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class TreePartsModule { }

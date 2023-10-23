import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeFullComponent } from './tree-full.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    TreeFullComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class TreeFullModule { }

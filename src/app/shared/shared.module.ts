import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavPublicComponent } from './nav-public/nav-public.component';



@NgModule({
  declarations: [
    NavPublicComponent
  ],
  exports: [
    NavPublicComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

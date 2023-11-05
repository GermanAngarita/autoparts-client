import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavPublicComponent } from './nav-public/nav-public.component';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    NavPublicComponent
  ],
  exports: [
    NavPublicComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class SharedModule { }

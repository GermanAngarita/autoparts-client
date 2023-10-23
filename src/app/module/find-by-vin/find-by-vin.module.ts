import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindByVinComponent } from './find-by-vin.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FindByVinComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ]
})
export class FindByVinModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavPublicComponent } from './nav-public/nav-public.component';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';
import { ModalMensajesComponent } from './modal-mensajes/modal-mensajes.component';
import { ModalDetalleTreeComponent } from './modal-detalle-tree/modal-detalle-tree.component';


@NgModule({
  declarations: [
    NavPublicComponent,
    ModalMensajesComponent,
    ModalDetalleTreeComponent
  ],
  exports: [
    NavPublicComponent,
    ModalMensajesComponent,
    ModalDetalleTreeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class SharedModule { }

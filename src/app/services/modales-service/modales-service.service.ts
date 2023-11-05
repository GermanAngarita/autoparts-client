import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Vin } from 'src/app/interfaces/Vins/vins';
import { ModalDetalleTreeComponent } from 'src/app/shared/modal-detalle-tree/modal-detalle-tree.component';
import { ModalMensajesComponent } from 'src/app/shared/modal-mensajes/modal-mensajes.component';

@Injectable({
  providedIn: 'root'
})
export class ModalesServiceService {

  constructor( private Modal: NgbModal) { }

  public modalMensaje = ( mensaje: string ) => {
    const instancia = this.Modal.open( ModalMensajesComponent, {});

    instancia.componentInstance.mensaje = mensaje;
  }

  public treeModal = ( tree: Vin.treeBranch | Vin.treeDetails) => {
    const instancia = this.Modal.open( ModalDetalleTreeComponent, {
      size: 'xl'
    })
    instancia.componentInstance.tree = tree;
  }
}

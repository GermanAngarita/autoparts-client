import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-mensajes',
  templateUrl: './modal-mensajes.component.html',
  styleUrls: ['./modal-mensajes.component.css']
})
export class ModalMensajesComponent {

  @Input() mensaje: string = 'Por favor revisa tu conexión.'
  constructor(
    public modalActived: NgbActiveModal
  ){}
}

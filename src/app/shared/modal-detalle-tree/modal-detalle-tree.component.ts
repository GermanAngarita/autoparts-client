import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Vin } from 'src/app/interfaces/Vins/vins';
import { ModalesServiceService } from 'src/app/services/modales-service/modales-service.service';

@Component({
  selector: 'app-modal-detalle-tree',
  templateUrl: './modal-detalle-tree.component.html',
  styleUrls: ['./modal-detalle-tree.component.css']
})
export class ModalDetalleTreeComponent implements OnInit {

  public tree: Vin.treeDetails = {
    name: '',
    image: ''
  }
  public arrayCodes: Array<string> = []
  constructor(
    public modalActived: NgbActiveModal,
    private modalesService: ModalesServiceService
  ){
    
  }
  ngOnInit(): void {
    this.parseTree();
  }

  public parseTree = () => {
    if (!this.tree.branch) {
      return;
    }
    const data = Object.keys( this.tree.branch );
    this.arrayCodes = data;
  }

  public verDetalles = ( tree: Vin.treeBranch | Vin.treeDetails | undefined ) => {
    if (!tree) {
      return;
    }
    this.modalesService.treeModal( tree )
  }
}

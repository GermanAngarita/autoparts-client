import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Vin } from 'src/app/interfaces/Vins/vins';
import { ModalesServiceService } from 'src/app/services/modales-service/modales-service.service';

@Component({
  selector: 'app-modal-detalle-tree',
  templateUrl: './modal-detalle-tree.component.html',
  styleUrls: ['./modal-detalle-tree.component.css']
})
export class ModalDetalleTreeComponent implements OnInit {

  public ssd: string = '';
  public lang: string = '';
  public link: string = '';
  public tree: Vin.treeDetails = {
    name: '',
    image: ''
  }
  public arrayCodes: Array<string> = []
  constructor(
    public modalActived: NgbActiveModal,
    private modalesService: ModalesServiceService,
    private router: Router,
    private routerActived: ActivatedRoute
  ){
    this.routerActived.queryParams.subscribe( ( params: Params ) => {
      console.log('params', params)
      if (params['ssd']) {
        this.ssd = params['ssd'];
        this.lang = params['lang'];
        this.link = params['link'];
        // this.consultaTree();
      }
    } )
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

  public verParte = ( node_id: string ) => {
    this.router.navigate(['tree-parts'], {
      queryParams: {
        node_id: node_id,
        ssd: this.ssd,
        lang: this.lang,
        link: this.link
      }
    })
    this.modalActived.close('Closed')
  }
}

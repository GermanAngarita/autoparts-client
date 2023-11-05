import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { respuestaMockup } from 'src/app/interfaces/Vins/vin.mockup';
import { Vin } from 'src/app/interfaces/Vins/vins';
import { FindByVinService } from 'src/app/services/find-by-vin/find-by-vin.service';
import { ModalesServiceService } from 'src/app/services/modales-service/modales-service.service';

@Component({
  selector: 'app-tree-full',
  templateUrl: './tree-full.component.html',
  styleUrls: ['./tree-full.component.css']
})
export class TreeFullComponent implements OnInit {

  public ssd: string = '';
  public lang: string = '';
  public link: string = '';

  public client: Vin.client;
  public modelInfo: Vin.model_info;

  public respuesta = respuestaMockup;
  public tree: any = respuestaMockup.tree;
  public model_image: string = ''
  public arrayCodes: any = []

  constructor(
    private findByVinService: FindByVinService,
    private title: Title,
    private routerActived: ActivatedRoute,
    private router: Router,
    private modalesService: ModalesServiceService
  ){
    this.title.setTitle('Información de las partes | Auto Parts');
    this.client = Object.assign({}, Vin.client );
    this.modelInfo = Object.assign({}, Vin.model_info );
    this.routerActived.queryParams.subscribe( ( params: Params ) => {
      console.log('params', params)
      if (params['ssd']) {
        this.ssd = params['ssd'];
        this.lang = params['lang'];
        this.link = params['link'];
        this.consultaTree();
      }
    } )
    
  }
  ngOnInit(): void {
    this.parseTree();
  }

  public consultaTree = () => {
    this.findByVinService.TreeFullGet(this.ssd, this.lang, this.link )
    .subscribe({
      next: ( respuesta: any ) => {
        if (!respuesta.error) {
          this.client = respuesta.client;
          this.modelInfo = respuesta.model_info;
          this.model_image = respuesta.model_image;
          this.tree = respuesta.tree;
        } else {

        }
        console.log('respuesta: ',respuesta)
      },
      error: ( error: HttpErrorResponse ) => {
        console.log('error: ', error)
      }
    })
  }

  public parseTree = () => {
    const data = Object.keys( this.tree );
    this.arrayCodes = data;
  }

  public irA = ( ruta: string ) => {
    this.router.navigate([ruta])
  }

  public verDetalle = ( tree: any ) => {
    this.modalesService.treeModal( tree );
  }
}

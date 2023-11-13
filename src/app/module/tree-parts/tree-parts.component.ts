import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Vin } from 'src/app/interfaces/Vins/vins';
import { FindByVinService } from 'src/app/services/find-by-vin/find-by-vin.service';
import { Parts } from 'src/app/interfaces/Vins/parts';
@Component({
  selector: 'app-tree-parts',
  templateUrl: './tree-parts.component.html',
  styleUrls: ['./tree-parts.component.css']
})
export class TreePartsComponent {

  public ssd: string = '';
  public lang: string = '';
  public link: string = '';
  public group: string = '';

  public client: Vin.client;
  public modelInfo: Vin.model_info;
  public parts: Parts.Root
  public model_image: string = '';

  constructor(
    private routerActived: ActivatedRoute,
    private findByVinService: FindByVinService
  ){
    this.client = Object.assign({}, Vin.client );
    this.modelInfo = Object.assign({}, Vin.model_info );
    this.parts = Object.assign({}, Parts.Root);
    this.routerActived.queryParams.subscribe( ( params: Params ) => {
      console.log('params', params)
      if (params['ssd']) {
        this.ssd = params['ssd'];
        this.lang = params['lang'];
        this.link = params['link'];
        this.group = params['node_id'];
        this.consultarPartes()
      }
    } )
  }

  private consultarPartes = () => {
    this.findByVinService.TreeNodePartsGet(this.ssd, this.lang, this.link, this.group)
    .subscribe({
      next: ( respuesta: any ) => {
        if (!respuesta.error) {
          this.client = respuesta.client;
          this.modelInfo = respuesta.model_info;
          this.model_image = respuesta.model_image;
          this.parts = respuesta.parts
          // this.tree = respuesta.tree;
        } else {

        }
        console.log('respuesta: ',respuesta)
      },
      error: ( error: HttpErrorResponse ) => {
        console.log('error: ', error)
      }
    })
  }
}

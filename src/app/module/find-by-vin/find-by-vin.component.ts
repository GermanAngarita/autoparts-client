import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FindByVinService } from 'src/app/services/find-by-vin/find-by-vin.service';
import { Vin } from '../../interfaces/Vins/vins';
import { Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalesServiceService } from 'src/app/services/modales-service/modales-service.service';

@Component({
  selector: 'app-find-by-vin',
  templateUrl: './find-by-vin.component.html',
  styleUrls: ['./find-by-vin.component.css']
})
export class FindByVinComponent {

  public vinBuscado: string = '';
  public models: Array<Vin.model> = [];
  public client: Vin.client;

  public modelSelect: Vin.model
  constructor( 
    private findByVinService: FindByVinService,
    private title: Title,
    private router: Router,
    private modalesService: ModalesServiceService 
    ){
      this.title.setTitle('Buscar partes por Vin | Auto Parts');
      this.client = Object.assign({}, Vin.client );
      this.modelSelect = Object.assign({}, Vin.model );
    }

  consulta = () => {

    // `if (!environment.production) {
    //   const data = {
    //     "error": "",
    //     "client": {
    //         "mark": "RENAULT",
    //         "catalog_code": 63,
    //         "model": "Scénic II",
    //         "family": "Scénic",
    //         "ssd": "7831eb797a264a7fc6d7e365925abc22:df36d55dfff03336b6f8e4c67d8fc122",
    //         "param": "",
    //         "modification": "",
    //         "group": "",
    //         "subgroup": "",
    //         "universal_classifier": "yes",
    //         "vin": "vf1jm0u0a32441753",
    //         "frame": ""
    //     },
    //     "models": [
    //         {
    //             "brand": "RENAULT",
    //             "family": "Scénic",
    //             "model": "Scénic II",
    //             "Vehicle Type": "3.JM0L",
    //             "Engine Type": "4.F4R",
    //             "link": "MHBZS3FITmcwcU1KY0o5akZabUpmZz09--NE84QnZpZTFqcXJlS1k3ZlBYUVpGU1h1ZkNqK3BVQjlWQS81aG5HenVwWT0="
    //         }
    //     ]
    //   }
    //   this.models = data.models as Array<Vin.model>;
    //   this.client = data.client as Vin.client;
    //   return;
    // }`
    
    this.findByVinService.findVin( this.vinBuscado )
    .subscribe({
      next: ( respuesta: any ) => {
        if (!respuesta.error) {
          this.models = respuesta.models;
          this.client = respuesta.client;
        } else {
          this.modalesService.modalMensaje(respuesta.error.error)
        }
      },
      error: ( error: HttpErrorResponse ) => {
        this.modalesService.modalMensaje(error.error.error)
      }
    })
  }

  consultaRepuestos = ( model: Vin.model ) => {
    this.modelSelect = model;
    this.router.navigate(['tree-full'], {
      queryParams: {
        ssd: this.client.ssd,
        lang: 'en',
        link: this.modelSelect.link
      }
    })
  }
}

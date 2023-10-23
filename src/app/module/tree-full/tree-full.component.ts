import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { respuestaMockup } from 'src/app/interfaces/Vins/vin.mockup';
import { Vin } from 'src/app/interfaces/Vins/vins';
import { FindByVinService } from 'src/app/services/find-by-vin/find-by-vin.service';

@Component({
  selector: 'app-tree-full',
  templateUrl: './tree-full.component.html',
  styleUrls: ['./tree-full.component.css']
})
export class TreeFullComponent implements OnInit {

  public ssd: string = '';
  public lang: string = '';
  public link: string = '';

  public client: Vin.client

  public respuesta = respuestaMockup;
  public tree: any = respuestaMockup.tree;
  public arrayCodes: any = []

  constructor(
    private findByVinService: FindByVinService,
    private title: Title
  ){
    this.title.setTitle('Información de las partes | Auto Parts');
    this.client = Object.assign({}, Vin.client );
    // this.client - this.respuesta.client as Vin.client;
  }
  ngOnInit(): void {
    this.parseTree();
  }

  public consultaTree = () => {
    this.findByVinService.TreeFullGet(this.ssd, this.lang, this.link )
    .subscribe({
      next: ( respuesta: any ) => {},
      error: ( error: HttpErrorResponse ) => {}
    })
  }

  public parseTree = () => {
    const data = Object.keys( this.tree );
    this.arrayCodes = data;
    console.log(data)
  }
}

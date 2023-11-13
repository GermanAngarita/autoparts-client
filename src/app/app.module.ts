import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FindByVinModule } from './module/find-by-vin/find-by-vin.module';
import { HttpClientModule } from '@angular/common/http';
import { TreeFullRoutingModule } from './module/tree-full/tree-full-routing.module';
import { TreeFullModule } from './module/tree-full/tree-full.module';
import { FindByVinRoutingModule } from './module/find-by-vin/find-by-vin-routing.module';
import { HomeRoutingModule } from './module/home/home-routing.module';
import { HomeModule } from './module/home/home.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TreePartsModule } from './module/tree-parts/tree-parts.module';
import { TreePartsRoutingModule } from './module/tree-parts/tree-parts-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    HomeRoutingModule,
    HomeModule,
    FindByVinRoutingModule,
    FindByVinModule,
    TreeFullRoutingModule,
    TreeFullModule,
    TreePartsRoutingModule,
    TreePartsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NoPreloading, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./module/home/home-routing.module').then( m => m.HomeRoutingModule )
  },
  {
    path: 'find-by-vin',
    loadChildren: () => import('./module/find-by-vin/find-by-vin-routing.module').then( m => m.FindByVinRoutingModule )
  },
  {
    path: 'tree-full',
    loadChildren: () => import('./module/tree-full/tree-full-routing.module').then( m => m.TreeFullRoutingModule )
  },
  {
    path: 'tree-parts',
    loadChildren: () => import('./module/tree-parts/tree-parts-routing.module').then( m => m.TreePartsRoutingModule )
  },
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { preloadingStrategy: NoPreloading }),
    FormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

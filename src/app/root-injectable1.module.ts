import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootInjectable1Component } from './root-injectable1/root-injectable1.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: RootInjectable1Component,
  outlet: 'root-1'
}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class RootInjectable1Module { }

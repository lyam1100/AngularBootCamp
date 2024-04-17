import { NgModule } from '@angular/core';
import { MyFirstComponentComponent } from '../my-first-component/my-first-component.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {component: MyFirstComponentComponent, path: 'individual'}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class MyFirstModuleModule { }

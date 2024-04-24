import { NgModule } from '@angular/core';
import { LazyLoadingComponent } from './lazy-loading.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component: LazyLoadingComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LazyLoadingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderComponent } from './module-provider/provider/provider.component';

const routes: Routes = [
  {path:'', component:ProviderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

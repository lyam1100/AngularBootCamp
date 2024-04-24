import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SimpleRouteComponent } from './simple-route/simple-route.component';
import { SlugsComponent } from './slugs/slugs.component';

const routes: Routes = [
  {path:'home', component:AppComponent},
  {path:'simple-route', component:SimpleRouteComponent},
  {path:'lazy-loading', loadChildren: () => import('./lazy-loading/lazy-loading.module').then(m => m.LazyLoadingModule)},
  {path:'droutes/:slug', component:SlugsComponent, children:[
    {path:'hello', component:SlugsComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

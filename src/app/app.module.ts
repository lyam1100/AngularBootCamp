import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleRouteComponent } from './simple-route/simple-route.component';
import { SlugsComponent } from './slugs/slugs.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleRouteComponent,
    SlugsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

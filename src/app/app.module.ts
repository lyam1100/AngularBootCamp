import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProviderComponent } from './module-provider/provider/provider.component';
import { RootInjectable1Component } from './root-injectable1/root-injectable1.component';
import { RootInjectable2Component } from './root-injectable2/root-injectable2.component';
import { SingletonServiceService } from './providers/singleton-service.service';
import { RootInjectable1Module } from './root-injectable1.module';
import { RootInjectable2Module } from './root-injectable2.module';

@NgModule({
  declarations: [
    AppComponent,
    ProviderComponent,
    RootInjectable1Component,
    RootInjectable2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RootInjectable1Module,
    RootInjectable2Module
  ],
  providers: [SingletonServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

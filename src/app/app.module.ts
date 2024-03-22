import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwitchComponent } from './Ejercicio_2/switch/switch.component';
import { IfComponent } from './Ejercicio_2/if/if.component';

@NgModule({
  declarations: [
    AppComponent,
    SwitchComponent,
    IfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, IfComponent, SwitchComponent]
})
export class AppModule { }

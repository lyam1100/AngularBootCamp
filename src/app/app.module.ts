import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { EventBindingComponent } from './EventBindingComponent/event_binding.component';
import { FormsModule } from '@angular/forms';
import { OneWayBindingComponent } from './OneWayBindingComponent/one-way-binding.component';
import { TwoWayBindingComponentComponent } from './TwoWayBindingComponent/two-way-binding-component.component';

@NgModule({
  declarations: [
    EventBindingComponent,
    OneWayBindingComponent,
    TwoWayBindingComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [EventBindingComponent, OneWayBindingComponent, TwoWayBindingComponentComponent]
})
export class AppModule { }

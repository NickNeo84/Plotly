import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraftComponent } from './graft/graft.component';
import { EventsDirective } from './graft/events.directive';

import { FormsModule, ReactiveFormsModule }   from '@angular/forms';


// PlotlyModule.plotlyjs = PlotlyJS;


@NgModule({
  declarations: [
    AppComponent,
    GraftComponent,
    EventsDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

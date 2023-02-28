import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxImageZoomModule} from "ngx-image-zoom";
import {RedZoomModule} from "ngx-red-zoom";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxImageZoomModule,
    RedZoomModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {GeocodingService} from "./services/geocoding.service";
import {MapService} from "./services/map.service";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    MapService,
    GeocodingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

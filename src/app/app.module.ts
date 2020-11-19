import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WagonsComponent } from './wagons/wagons.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoggerService} from './services/logger.service';

@NgModule({
  declarations: [
    AppComponent,
    WagonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

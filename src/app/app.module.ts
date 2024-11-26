import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExpModalComponent } from './example/exp-modal/exp-modal.component';
import { DatatableComponent } from './example/datatable/datatable.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ExpModalComponent,
    DatatableComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

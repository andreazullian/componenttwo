import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DownbuttonComponent } from './downbutton/downbutton.component';
import { ButtontopComponent } from './buttontop/buttontop.component';

@NgModule({
  declarations: [
    AppComponent,
    DownbuttonComponent,
    ButtontopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

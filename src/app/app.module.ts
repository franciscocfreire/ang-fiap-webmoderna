import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HerosComponent } from './heros/heros.component';
import { PlacarComponent } from './placar/placar.component';
import { ClubesComponent } from './clubes/clubes.component';

@NgModule({
  declarations: [
    AppComponent,
    HerosComponent,
    PlacarComponent,
    ClubesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

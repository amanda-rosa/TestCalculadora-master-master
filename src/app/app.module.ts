import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SomaComponent } from './soma/soma.component';
import { SubtracaoComponent } from './subtracao/subtracao.component';

@NgModule({
  declarations: [
    AppComponent,
    SomaComponent,
    SubtracaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

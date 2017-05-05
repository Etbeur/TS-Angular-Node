
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PieceDirective } from './shared/piece-directive.directive';
import { JeuComponent } from './jeu/jeu.component';

@NgModule({
  declarations: [
    AppComponent,
    PieceDirective,
    JeuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
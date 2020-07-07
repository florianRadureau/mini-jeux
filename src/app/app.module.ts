import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HangmanComponent } from './games/hangman/hangman.component';
import { HangmanService } from './shared/services/hangman/hangman.service';
import { HttpClientModule } from '@angular/common/http';
import { ActionButtonComponent } from './shared/components/action-button/action-button.component';
import { SolitaireComponent } from './games/solitaire/solitaire.component';
import { SimonComponent } from './games/simon/simon.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HangmanComponent,
    ActionButtonComponent,
    SolitaireComponent,
    SimonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HangmanService],
  bootstrap: [AppComponent]
})
export class AppModule { }

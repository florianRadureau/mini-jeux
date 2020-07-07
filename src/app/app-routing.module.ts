import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HangmanComponent } from './games/hangman/hangman.component';
import { SolitaireComponent } from './games/solitaire/solitaire.component';
import { SimonComponent } from './games/simon/simon.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'games', children: [{
      path: 'hangman', component: HangmanComponent
    }, {
      path: 'solitaire', component: SolitaireComponent
    }, {
      path: 'simon', component: SimonComponent
    }]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HangmanComponent } from './games/hangman/hangman.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'games', children: [{
        path: 'hangman', component: HangmanComponent
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

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mini-jeux';
  routes = [
    {
      title: 'Accueil',
      route: 'home'
    },
    {
      title: 'Jeu du Pendu',
      route: 'games/hangman'
    },
    {
      title: 'Solitaire',
      route: 'games/solitaire'
    },
    {
      title: 'Simon',
      route: 'games/simon'
    }
  ];
}

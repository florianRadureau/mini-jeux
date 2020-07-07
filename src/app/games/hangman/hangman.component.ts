import { Component, OnInit } from '@angular/core';
import { HangmanService } from '../../shared/services/hangman/hangman.service';

interface HangmanCharInterface {
  letter: string;
  status: boolean;
}

@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.scss']
})
export class HangmanComponent implements OnInit {
  public currentWord: HangmanCharInterface[];
  public isLoading: boolean;
  public errorsCount = 0;
  private letters = 'abcdefghijklmnopqrstuvwxyz';
  public lettersButtons: HangmanCharInterface[];
  public wonGame: boolean;

  constructor(private hangmanService: HangmanService) { }

  ngOnInit(): void {
    this.getNewWord();
    this.lettersButtons = this.letters.split('').map((letter: string) => {
      return {
        letter,
        status: undefined
      };
    });
  }

  getNewWord() {
    this.isLoading = true;
    this.hangmanService.getWord().subscribe(word => {
      this.currentWord = word.split('').map((char: string) => {
        return {
          letter: char,
          status: false
        };
      });
      this.isLoading = false;
    });
  }

  onLetterButtonClick(letterButton: HangmanCharInterface): void {
    let correspondingLetters: HangmanCharInterface[] = this.currentWord.filter((currentWordLetter: HangmanCharInterface) =>
      currentWordLetter.letter.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') === letterButton.letter.toLowerCase()
    );
    if (correspondingLetters.length > 0) {
      correspondingLetters = correspondingLetters.map((currentWordLetter: HangmanCharInterface) => {
        currentWordLetter.status = true;
        return currentWordLetter;
      });
      letterButton.status = true;
    } else {
      this.errorsCount++;
      letterButton.status = false;
    }
    this.checkGameStatus();
  }

  checkGameStatus() {
    if (!this.currentWord.some((currentWordChar: HangmanCharInterface) => currentWordChar.status === false)) {
      this.wonGame = true;
    } else if (this.errorsCount >= 11) {
      this.wonGame = false;
    }
  }

  replayGame() {
    this.lettersButtons.map((letterButton: HangmanCharInterface) => {
      letterButton.status = undefined;
      return letterButton;
    });
    this.getNewWord();
    this.wonGame = undefined;
    this.errorsCount = 0;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HangmanService {

  constructor(private http: HttpClient) { }

  getWord(): Observable<string> {
    return this.http.get(`assets/liste_francais.txt`, {responseType: 'text'})
      .pipe(
        map((data: string) => {
        const lines: string[] = data.split(/[\r\n]+/);
        let result = '';
        do {
          result = lines[Math.floor(Math.random() * Math.floor(lines.length))];
        } while (result.length <= 4 && result.match(/^[A-Za-z]/));
        return result;
      })
      );
  }
}

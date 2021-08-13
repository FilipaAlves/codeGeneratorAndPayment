
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GeneratorGrid, LetterPosition } from '../pages/generator-page/generator-page.module';

@Injectable({
  providedIn: 'root'
})
export class CreateGridService {
  alphabets = "abcdefghijklmnopqrstuvwxyz"
  listRandomAlphabets = Array(100);
  time!: Date;
  code = "";
  percentageOf = 20;
  inputRangeGrid = 10 * 10;
  maxGridWithLetter = (this.inputRangeGrid * (1 - this.percentageOf / 100));
  input = "";

  currentGrid$ = new BehaviorSubject<GeneratorGrid>({
    code: "",
    grid: []
  })

  timer$ = new BehaviorSubject<any>(new Date().toLocaleDateString());
  running$ = new BehaviorSubject(false);

  constructor() {
    this.running$.subscribe(() => {
      this.getCurrentDate();
    })
  }

  setGeneratorRunning(live: boolean) {
    this.running$.next(live);
    this.getLetterAlphabetic();
  }

  getLetterAlphabetic() {
    setInterval(() => {
      if (this.input === "") {
        const currentGrid = this.randomLetterAlphabetic();
        this.currentGrid$.next(currentGrid);
      }
    }, 2000);
  }

  getCurrentDate() {
    setInterval(() => {
      this.time = new Date();
      this.timer$.next(this.time);
    }, 1000);
  }

  randomLetterAlphabetic(inputLetter = ""): GeneratorGrid {
    inputLetter = inputLetter.toLowerCase();
    this.listRandomAlphabets = this.creatListRandomCharacter(inputLetter);

    const lettersPosition = this.getLettersPositionInArray()

    let occurrenceLetterPosition = (this.listRandomAlphabets.filter(s => s.includes(lettersPosition.letterPosition))).length;
    occurrenceLetterPosition = this.validCount(occurrenceLetterPosition);

    let occurrenceLetterPositionInverse = (this.listRandomAlphabets.filter(s => s.includes(lettersPosition.letterPositionInverse))).length;
    occurrenceLetterPositionInverse = this.validCount(occurrenceLetterPositionInverse);

    this.code = occurrenceLetterPosition.toString() + occurrenceLetterPositionInverse.toString();

    const gridGeneratorResult: GeneratorGrid = {
      grid: this.listRandomAlphabets,
      code: this.code
    }
    return gridGeneratorResult;
  }

  validCount(occorre: number): number {
    for (let i = 1; ; i++) {
      if (occorre > 9) {
        occorre = occorre % i;
      }
      else
        return occorre
    }
  }

  getLettersPositionInArray(): LetterPosition {
    const seconds: string[] = this.time.getSeconds().toString().split('');
    if (seconds.length === 1) seconds.unshift('0');

    const position = parseInt(seconds[1]) * 10 + parseInt(seconds[0]);
    const positionInverse = parseInt(seconds[0]) * 10 + parseInt(seconds[1]);

    const lettersPosition: LetterPosition = {
      letterPosition: this.listRandomAlphabets[position],
      letterPositionInverse: this.listRandomAlphabets[positionInverse]
    }
    return lettersPosition
  }

  creatListRandomCharacter(inputLetter = ""): any[] {
    let maxGrid = 0;
    if (inputLetter === "") {
      maxGrid = 100;
    }
    else {
      maxGrid = this.maxGridWithLetter;
      this.listRandomAlphabets = this.listRandomAlphabets.slice(0, maxGrid);
    }

    for (let i = 0; i < maxGrid && this.listRandomAlphabets.length <= 100; i++) {
      const randomCharacter = this.alphabets[Math.floor(Math.random() * this.alphabets.length)];
      this.listRandomAlphabets[i] = randomCharacter;
      if (i === (maxGrid - 1) && inputLetter !== "") {
        this.listRandomAlphabets = this.listRandomAlphabets.concat(new Array(20).fill(inputLetter));
      }
    }
    return this.listRandomAlphabets;
  }
}

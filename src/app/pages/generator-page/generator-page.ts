import { Component, ElementRef, EventEmitter, HostBinding, HostListener, OnInit, Output, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
import { CreateGridService } from '../../services/createGrid.service';
import { GeneratorGrid } from './generator-page.module';

@Component({
  selector: '/generator-page',
  templateUrl: './generator-page.html',
  styleUrls: ['./generator-page.css']
})
export class GeneratorPageComponent implements OnInit{

  inputRangeGrid = 10 * 10;
  input!: string;

  @ViewChild('inputLetter', { static: true })
  public inputLetter!: ElementRef;

  @HostBinding('attr.disabled') disabled = false;

  @Output()
  throttleInput = new EventEmitter();

  throttleTime = 4000;

  currentGrid: GeneratorGrid = {} as GeneratorGrid;
  currentGridService$ = this.createGridService.currentGrid$;
  running$ = this.createGridService.running$;
  time$ = this.createGridService.timer$;

  constructor(
    public createGridService: CreateGridService
  ) {
    this.currentGridService$.subscribe(currentGrid => this.currentGrid = currentGrid)
    this.currentGrid.grid = Array(this.inputRangeGrid);
  }

  ngOnInit() {
    fromEvent<any>(this.inputLetter.nativeElement, 'keyup')
      .pipe(
        throttleTime(this.throttleTime)
      )
      .subscribe(res => {
        this.input = res.target.value;
        if (this.input !== "") {
          this.currentGridService$.next(this.createGridService.randomLetterAlphabetic(this.input));
          this.throttleInput.emit(res)
        }
      })
  }

  startGenerator() {
    this.createGridService.setGeneratorRunning(!this.running$.value);    
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    this.disabled = true;
    setTimeout(() => { this.disabled = false; this.input="" }, this.throttleTime)
  }
}

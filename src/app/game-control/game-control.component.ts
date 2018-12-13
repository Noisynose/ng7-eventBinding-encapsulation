import { Component, OnInit, Output } from '@angular/core';
import { Number } from '../number.model';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  numbers: Number[] = [];
  interval: number = 0;
  intervalHandler: any;

  constructor() {}

  ngOnInit() {}

  onStartGame() {
    this.intervalHandler = setInterval(() => {
      this.numbers.push(new Number(this.interval++));
    }, 1000);
  }

  onStopGame() {
    clearInterval(this.intervalHandler);
  }

  isOdd(number: Number): boolean {
    return number.number % 2 == 1;
  }

  isEven(number: Number): boolean {
    return number.number % 2 == 0;
  }
}

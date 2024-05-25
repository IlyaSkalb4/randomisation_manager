import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SetDiceSvgComponent } from '../set-dice-svg/set-dice-svg.component';
import { HttpService } from '../../../services/http.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-dice',
  standalone: true,
  imports: [
    CommonModule,
    SetDiceSvgComponent,
    HttpClientModule
  ],
  providers: [
    HttpService
  ],
  templateUrl: './dice.component.html',
  styleUrl: './dice.component.css'
})
export class DiceComponent implements OnInit {
  title: string = 'Гральні кубики';
  startDiceNumbers!: number[];
  gameResultNumbers: number[] = [];
  gameState: number = 0;

  displayComputerResult: boolean = false;
  displayUserResult: boolean = false;
  displayEndGame: boolean = false;

  constructor(private httpService: HttpService) { }

  rollDice(): void {
    this.getGameResult();

    setTimeout(() => {
      let compResult = this.gameResultNumbers[0] + this.gameResultNumbers[1];
      let userResult = this.gameResultNumbers[2] + this.gameResultNumbers[3];

      this.displayEndGame = compResult < userResult;

      this.displayComputerResult = true;
    }, 2000);

    setTimeout(() => {
      this.displayUserResult = true;
    }, 5000);
  }

  getGameResult(): void {
    this.httpService.postRandomNumbers(1, 6, 4).subscribe((respObj: any) => {
      let randomNumbers: number[] = respObj.result.random.data;

      if (randomNumbers !== undefined) {
        this.gameResultNumbers = randomNumbers;
      }

      console.log(`random.org responce:`);
      console.log(respObj.result.random.data);

    }, error => console.log(error));
  }

  changeState() {
    if (this.gameState === 0) {
      this.gameState = 1;
      this.rollDice();
    }
    else {
      this.gameState = 0;
      this.displayUserResult = false;
      this.displayComputerResult = false;
    }
  }

  setStartDices() {
    let dice1 = this.getJSRandomNumber();
    let dice2 = this.getJSRandomNumber();

    this.startDiceNumbers = [dice1, dice2];
  }

  getJSRandomNumber(min: number = 1, max: number = 6): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  ngOnInit(): void {
    this.setStartDices();
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-coin-flipping',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    HttpService
  ],
  templateUrl: './coin-flipping.component.html',
  styleUrl: './coin-flipping.component.css'
})
export class CoinFlippingComponent {
  images: string[] = [
    'assets/5-kop-head.jpg',
    'assets/5-kop-tail.jpg'
  ];

  title: string = 'Оберіть сторону';
  gameOutcomeLine: string = '';
  resultImage: string = '';

  gameState: number = 0;
  gameResultNumber: number | undefined;
  clickedImage: number | null = null;

  gameResultToDisplay: number | null = null;

  constructor(private httpService: HttpService) {}

  toggleClickedState(index: number) {
    if (this.clickedImage === index) {
      this.clickedImage = null;
      this.title = 'Оберіть сторону';
      return;
    } else {
      this.clickedImage = index;
    }

    this.title = this.clickedImage === 0 ? "Обрана 'Решка'" : "Обран 'Орел'";
  }

  flipCoin() {
    this.getGameResult();

    setTimeout(() => {
        this.gameResultToDisplay = this.gameResultNumber === this.clickedImage ? 1 : 0;

        if(this.gameResultNumber !== undefined) {
          this.resultImage = this.images[this.gameResultNumber];
        }

        if(this.gameResultToDisplay) {
            this.gameOutcomeLine = 'Це перемога!';
        } else {
            this.gameOutcomeLine = 'Ви все програли!';
        }

    }, 2000);
  }

  getGameResult(): void {
    this.httpService.postRandomNumbers(0, 1, 1).subscribe((respObj: any) => {
      let randomNumbers : number[] = respObj.result.random.data;
      
      if(randomNumbers !== undefined) {
        this.gameResultNumber = randomNumbers[0];
      }

      console.log(`random.org responce:`);
      console.log(respObj.result.random.data);

    }, error => console.log(error));
  }

  changeState() {
    if(this.gameState === 1) {
      this.gameState = 0;
      this.clickedImage = null; 
      this.gameResultToDisplay = null;
      this.title = 'Оберіть сторону';
      this.gameOutcomeLine = '';
      this.resultImage = '';
    }
    else {
      this.gameState = 1;
      this.flipCoin();
    }
  }
}

import { CommonModule } from '@angular/common';
import { Component, Injectable } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Injectable()
@Component({
  selector: 'app-random-numbers',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    HttpService,
  ],
  templateUrl: './random-numbers.component.html',
  styleUrl: './random-numbers.component.css'
})
export class RandomNumbersComponent {
  minRange: number = 0;
  maxRange: number = 1;
  amountNumbers: number = 1;
  randomNumbersLine: string = '';

  constructor(private httpService: HttpService) {}
  
  submit(): void {
    this.httpService.postRandomNumbers(this.minRange, this.maxRange, this.amountNumbers)
    .subscribe((respObj: any) => {
      let randomNumbers = respObj.result.random.data;
      
      if(randomNumbers) {
        let length = randomNumbers.length;
        this.randomNumbersLine = '';

        for(let i = 0; length - 1 > i; i++) {
          this.randomNumbersLine += randomNumbers[i] + ", ";
        }

        this.randomNumbersLine += randomNumbers[length - 1];
      }
    }, error => console.log(error));
  }
}

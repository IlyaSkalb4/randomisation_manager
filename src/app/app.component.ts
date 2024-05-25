import { Component, OnInit, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RandomNumbersComponent } from './components/random-numbers/random-numbers.component';
import { CoinFlippingComponent } from './components/coin-flipping/coin-flipping.component';
import { DiceComponent } from './components/dice-components/dice/dice.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RandomNumbersComponent,
    CoinFlippingComponent,
    DiceComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.setStyle(document.body, 'background-color', '#aaa');
  }
}

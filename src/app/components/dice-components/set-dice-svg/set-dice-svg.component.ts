import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SvgDice1Component } from '../svg-dice1/svg-dice1.component';
import { SvgDice2Component } from '../svg-dice2/svg-dice2.component';
import { SvgDice3Component } from '../svg-dice3/svg-dice3.component';
import { SvgDice4Component } from '../svg-dice4/svg-dice4.component';
import { SvgDice5Component } from '../svg-dice5/svg-dice5.component';
import { SvgDice6Component } from '../svg-dice6/svg-dice6.component';

@Component({
  selector: 'app-set-dice-svg',
  standalone: true,
  imports: [
    CommonModule,
    SvgDice1Component,
    SvgDice2Component,
    SvgDice3Component,
    SvgDice4Component,
    SvgDice5Component,
    SvgDice6Component,
  ],
  templateUrl: './set-dice-svg.component.html',
  styleUrl: './set-dice-svg.component.css'
})
export class SetDiceSvgComponent {
  @Input() selectedDice: number = 1;
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgDice1Component } from './svg-dice1.component';

describe('SvgDice1Component', () => {
  let component: SvgDice1Component;
  let fixture: ComponentFixture<SvgDice1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgDice1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgDice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

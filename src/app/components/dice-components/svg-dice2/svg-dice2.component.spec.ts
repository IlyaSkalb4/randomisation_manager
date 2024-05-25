import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgDice2Component } from './svg-dice2.component';

describe('SvgDice2Component', () => {
  let component: SvgDice2Component;
  let fixture: ComponentFixture<SvgDice2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgDice2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgDice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

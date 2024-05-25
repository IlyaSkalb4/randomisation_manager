import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgDice5Component } from './svg-dice5.component';

describe('SvgDice5Component', () => {
  let component: SvgDice5Component;
  let fixture: ComponentFixture<SvgDice5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgDice5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgDice5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

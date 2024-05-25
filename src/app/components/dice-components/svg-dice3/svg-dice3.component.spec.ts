import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgDice3Component } from './svg-dice3.component';

describe('SvgDice3Component', () => {
  let component: SvgDice3Component;
  let fixture: ComponentFixture<SvgDice3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgDice3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgDice3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

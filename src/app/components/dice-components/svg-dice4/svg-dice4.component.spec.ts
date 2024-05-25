import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgDice4Component } from './svg-dice4.component';

describe('SvgDice4Component', () => {
  let component: SvgDice4Component;
  let fixture: ComponentFixture<SvgDice4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgDice4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgDice4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

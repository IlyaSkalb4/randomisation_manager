import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgDice6Component } from './svg-dice6.component';

describe('SvgDice6Component', () => {
  let component: SvgDice6Component;
  let fixture: ComponentFixture<SvgDice6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgDice6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgDice6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

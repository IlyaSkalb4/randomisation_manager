import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetDiceSvgComponent } from './set-dice-svg.component';

describe('SetDiceSvgComponent', () => {
  let component: SetDiceSvgComponent;
  let fixture: ComponentFixture<SetDiceSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetDiceSvgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetDiceSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

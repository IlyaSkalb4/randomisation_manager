import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinFlippingComponent } from './coin-flipping.component';

describe('CoinFlippingComponent', () => {
  let component: CoinFlippingComponent;
  let fixture: ComponentFixture<CoinFlippingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoinFlippingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoinFlippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

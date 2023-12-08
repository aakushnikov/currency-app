import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyTickComponent } from './currency-tick.component';

describe('CurrencyTickComponent', () => {
  let component: CurrencyTickComponent;
  let fixture: ComponentFixture<CurrencyTickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrencyTickComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurrencyTickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSellBuyComponent } from './info-sell-buy.component';

describe('InfoSellBuyComponent', () => {
  let component: InfoSellBuyComponent;
  let fixture: ComponentFixture<InfoSellBuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoSellBuyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoSellBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

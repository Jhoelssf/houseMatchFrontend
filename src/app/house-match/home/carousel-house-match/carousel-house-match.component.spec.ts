import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselHouseMatchComponent } from './carousel-house-match.component';

describe('CarouselHouseMatchComponent', () => {
  let component: CarouselHouseMatchComponent;
  let fixture: ComponentFixture<CarouselHouseMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselHouseMatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselHouseMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

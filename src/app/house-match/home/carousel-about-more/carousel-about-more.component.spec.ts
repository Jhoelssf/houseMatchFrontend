import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselAboutMoreComponent } from './carousel-about-more.component';

describe('CarouselAboutMoreComponent', () => {
  let component: CarouselAboutMoreComponent;
  let fixture: ComponentFixture<CarouselAboutMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselAboutMoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselAboutMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMediaSectionComponent } from './card-media-section.component';

describe('CardMediaSectionComponent', () => {
  let component: CardMediaSectionComponent;
  let fixture: ComponentFixture<CardMediaSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMediaSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardMediaSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

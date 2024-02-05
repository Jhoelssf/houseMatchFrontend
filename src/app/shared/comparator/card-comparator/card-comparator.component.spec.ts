import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComparatorComponent } from './card-comparator.component';

describe('CardComparatorComponent', () => {
  let component: CardComparatorComponent;
  let fixture: ComponentFixture<CardComparatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComparatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardComparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

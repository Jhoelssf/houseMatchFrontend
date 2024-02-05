import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardViewComparatorComponent } from './card-view-comparator.component';

describe('CardViewComparatorComponent', () => {
  let component: CardViewComparatorComponent;
  let fixture: ComponentFixture<CardViewComparatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardViewComparatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardViewComparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

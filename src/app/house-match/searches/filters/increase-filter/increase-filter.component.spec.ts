import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncreaseFilterComponent } from './increase-filter.component';

describe('IncreaseFilterComponent', () => {
  let component: IncreaseFilterComponent;
  let fixture: ComponentFixture<IncreaseFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncreaseFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncreaseFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

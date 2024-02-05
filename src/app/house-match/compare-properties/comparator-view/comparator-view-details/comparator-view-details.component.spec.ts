import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparatorViewDetailsComponent } from './comparator-view-details.component';

describe('ComparatorViewDetailsComponent', () => {
  let component: ComparatorViewDetailsComponent;
  let fixture: ComponentFixture<ComparatorViewDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparatorViewDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComparatorViewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

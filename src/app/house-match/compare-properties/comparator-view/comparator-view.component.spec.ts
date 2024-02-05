import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparatorViewComponent } from './comparator-view.component';

describe('ComparatorViewComponent', () => {
  let component: ComparatorViewComponent;
  let fixture: ComponentFixture<ComparatorViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparatorViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComparatorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

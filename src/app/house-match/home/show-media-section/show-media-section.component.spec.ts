import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMediaSectionComponent } from './show-media-section.component';

describe('ShowMediaSectionComponent', () => {
  let component: ShowMediaSectionComponent;
  let fixture: ComponentFixture<ShowMediaSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMediaSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowMediaSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

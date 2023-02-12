import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutHouseMatchComponent } from './layout-house-match.component';

describe('LayoutHouseMatchComponent', () => {
  let component: LayoutHouseMatchComponent;
  let fixture: ComponentFixture<LayoutHouseMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutHouseMatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutHouseMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

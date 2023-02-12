import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderHouseMatchComponent } from './header-house-match.component';

describe('HeaderHouseMatchComponent', () => {
  let component: HeaderHouseMatchComponent;
  let fixture: ComponentFixture<HeaderHouseMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderHouseMatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderHouseMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

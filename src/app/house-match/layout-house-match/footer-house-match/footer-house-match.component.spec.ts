import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterHouseMatchComponent } from './footer-house-match.component';

describe('FooterHouseMatchComponent', () => {
  let component: FooterHouseMatchComponent;
  let fixture: ComponentFixture<FooterHouseMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterHouseMatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterHouseMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

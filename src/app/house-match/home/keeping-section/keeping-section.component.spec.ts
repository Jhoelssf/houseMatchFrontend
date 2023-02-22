import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeepingSectionComponent } from './keeping-section.component';

describe('KeepingSectionComponent', () => {
  let component: KeepingSectionComponent;
  let fixture: ComponentFixture<KeepingSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeepingSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeepingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

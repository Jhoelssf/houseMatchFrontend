import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneFileSelectComponent } from './one-file-select.component';

describe('OneFileSelectComponent', () => {
  let component: OneFileSelectComponent;
  let fixture: ComponentFixture<OneFileSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneFileSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneFileSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

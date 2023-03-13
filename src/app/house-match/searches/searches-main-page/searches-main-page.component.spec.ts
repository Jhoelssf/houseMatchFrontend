import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchesMainPageComponent } from './searches-main-page.component';

describe('SearchesMainPageComponent', () => {
  let component: SearchesMainPageComponent;
  let fixture: ComponentFixture<SearchesMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchesMainPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchesMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

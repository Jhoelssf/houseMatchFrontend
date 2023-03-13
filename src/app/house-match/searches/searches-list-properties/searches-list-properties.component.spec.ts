import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchesListPropertiesComponent } from './searches-list-properties.component';

describe('SearchesListPropertiesComponent', () => {
  let component: SearchesListPropertiesComponent;
  let fixture: ComponentFixture<SearchesListPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchesListPropertiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchesListPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

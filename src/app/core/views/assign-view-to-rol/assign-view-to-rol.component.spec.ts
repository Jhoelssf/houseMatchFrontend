import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignViewToRolComponent } from './assign-view-to-rol.component';

describe('AssignViewToRolComponent', () => {
  let component: AssignViewToRolComponent;
  let fixture: ComponentFixture<AssignViewToRolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignViewToRolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignViewToRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

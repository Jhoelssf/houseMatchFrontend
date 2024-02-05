import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentCreateProfileComponent } from './agent-create-profile.component';

describe('AgentCreateProfileComponent', () => {
  let component: AgentCreateProfileComponent;
  let fixture: ComponentFixture<AgentCreateProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentCreateProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentCreateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

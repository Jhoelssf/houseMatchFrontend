import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPageAgentComponent } from './info-page-agent.component';

describe('InfoPageAgentComponent', () => {
  let component: InfoPageAgentComponent;
  let fixture: ComponentFixture<InfoPageAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoPageAgentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoPageAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

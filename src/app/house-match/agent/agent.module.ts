import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { AgentRoutingModule } from './agent-routing.module';
import { InfoPageAgentComponent } from './info-page-agent/info-page-agent.component';

@NgModule({
    declarations: [InfoPageAgentComponent],
    imports: [CommonModule, AgentRoutingModule, ButtonModule],
})
export class AgentModule {}

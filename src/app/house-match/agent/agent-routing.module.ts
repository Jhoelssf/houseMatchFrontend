import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoPageAgentComponent } from './info-page-agent/info-page-agent.component';

const routes: Routes = [
    {
        path: '',
        component: InfoPageAgentComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AgentRoutingModule {}

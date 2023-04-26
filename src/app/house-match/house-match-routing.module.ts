import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'search',
        loadChildren: () => import('./searches/searches.module').then((m) => m.SearchesModule),
    },
    {
        path: 'agent',
        loadChildren: () => import('./agent/agent.module').then((m) => m.AgentModule),
    },
    {
        path: 'my-properties',
        loadChildren: () => import('./agent/agent.module').then((m) => m.AgentModule),
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HouseMatchRoutingModule {}

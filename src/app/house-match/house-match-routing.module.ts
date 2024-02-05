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
        path: 'comparator',
        loadChildren: () =>
            import('./compare-properties/compare-properties.module').then((m) => m.ComparePropertiesModule),
    },
    {
        path: 'details/:id',
        loadChildren: () => import('./details-property/details-property.module').then((m) => m.DetailsPropertyModule),
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HouseMatchRoutingModule {}

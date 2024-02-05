import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComparatorViewComponent } from './comparator-view/comparator-view.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'compare',
    },
    {
        path: 'compare',
        component: ComparatorViewComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ComparePropertiesRoutingModule {}

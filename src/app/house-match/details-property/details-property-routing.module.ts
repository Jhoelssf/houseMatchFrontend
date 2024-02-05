import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPropertyComponent } from './details-property/details-property.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'details-property',
    },
    {
        path: 'details-property',
        component: DetailsPropertyComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DetailsPropertyRoutingModule {}

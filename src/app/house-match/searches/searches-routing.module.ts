import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchesMainPageComponent } from './searches-main-page/searches-main-page.component';

const routes: Routes = [
    {
        path: '',
        component: SearchesMainPageComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SearchesRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulesComponent } from './modules/modules.component';
import { RolesComponent } from './roles/roles.component';
import { UsersComponent } from './users/users.component';
import { ViewsComponent } from './views/views.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'users',
    },
    {
        path: 'users',
        component: UsersComponent,
    },
    {
        path: 'views',
        component: ViewsComponent,
    },
    {
        path: 'roles',
        component: RolesComponent,
    },
    {
        path: 'modules',
        component: ModulesComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CoreRoutingModule {}

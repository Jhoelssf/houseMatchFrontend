import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { LayoutHouseMatchComponent } from './house-match/layout-house-match/layout-house-match/layout-house-match.component';
import { AppLayoutComponent } from './layout/app.layout.component';
import { AuthChildGuard } from './shared/pipes/auth-child.guard';

@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                {
                    path: '',
                    component: LayoutHouseMatchComponent,
                    children: [
                        {
                            path: '',
                            loadChildren: () =>
                                import('./house-match/house-match.module').then((m) => m.HouseMatchModule),
                        },
                    ],
                },
                {
                    path: 'admin',
                    component: AppLayoutComponent,
                    canActivateChild: [AuthChildGuard],
                    children: [
                        {
                            path: '',
                            loadChildren: () =>
                                import('./demo/components/dashboard/dashboard.module').then((m) => m.DashboardModule),
                        },
                        {
                            path: 'uikit',
                            loadChildren: () =>
                                import('./demo/components/uikit/uikit.module').then((m) => m.UIkitModule),
                        },
                        {
                            path: 'utilities',
                            loadChildren: () =>
                                import('./demo/components/utilities/utilities.module').then((m) => m.UtilitiesModule),
                        },
                        {
                            path: 'documentation',
                            loadChildren: () =>
                                import('./demo/components/documentation/documentation.module').then(
                                    (m) => m.DocumentationModule
                                ),
                        },
                        {
                            path: 'blocks',
                            loadChildren: () =>
                                import('./demo/components/primeblocks/primeblocks.module').then(
                                    (m) => m.PrimeBlocksModule
                                ),
                        },
                        {
                            path: 'pages',
                            loadChildren: () =>
                                import('./demo/components/pages/pages.module').then((m) => m.PagesModule),
                        },
                        {
                            path: 'core',
                            loadChildren: () => import('./core/core.module').then((m) => m.CoreModule),
                        },
                    ],
                },
                {
                    path: 'auth',
                    loadChildren: () =>
                        import('./authentication/authentication.module').then((m) => m.AuthenticationModule),
                },
                {
                    path: 'landing',
                    loadChildren: () => import('./demo/components/landing/landing.module').then((m) => m.LandingModule),
                },
                { path: 'notfound', component: NotfoundComponent },
                { path: '**', redirectTo: '/notfound' },
            ],
            {
                scrollPositionRestoration: 'enabled',
                anchorScrolling: 'enabled',
                onSameUrlNavigation: 'reload',
            }
        ),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}

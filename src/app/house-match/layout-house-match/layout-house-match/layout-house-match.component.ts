import { Component, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { AppSidebarComponent } from '../../../layout/app.sidebar.component';
import { AppTopBarComponent } from '../../../layout/app.topbar.component';
import { LayoutService } from '../../../layout/service/app.layout.service';

@Component({
    selector: 'app-layout-house-match',
    templateUrl: './layout-house-match.component.html',
    styleUrls: ['./layout-house-match.component.scss'],
})
export class LayoutHouseMatchComponent implements OnDestroy, OnInit {
    overlayMenuOpenSubscription: Subscription;

    menuOutsideClickListener: any;

    profileMenuOutsideClickListener: any;

    @ViewChild(AppSidebarComponent) appSidebar!: AppSidebarComponent;

    @ViewChild(AppTopBarComponent) appTopbar!: AppTopBarComponent;

    constructor(public layoutService: LayoutService, public renderer: Renderer2, public router: Router) {
        this.overlayMenuOpenSubscription = this.layoutService.overlayOpen$.subscribe(() => {
            if (!this.menuOutsideClickListener) {
                this.menuOutsideClickListener = this.renderer.listen('document', 'click', (event) => {
                    const isOutsideClicked = !(
                        this.appSidebar.el.nativeElement.isSameNode(event.target) ||
                        this.appSidebar.el.nativeElement.contains(event.target) ||
                        this.appTopbar.menuButton.nativeElement.isSameNode(event.target) ||
                        this.appTopbar.menuButton.nativeElement.contains(event.target)
                    );
                    if (isOutsideClicked) {
                        this.hideMenu();
                    }
                });
            }

            if (!this.profileMenuOutsideClickListener) {
                this.profileMenuOutsideClickListener = this.renderer.listen('document', 'click', (event) => {
                    const isOutsideClicked = !(
                        this.appTopbar.menu.nativeElement.isSameNode(event.target) ||
                        this.appTopbar.menu.nativeElement.contains(event.target) ||
                        this.appTopbar.topbarMenuButton.nativeElement.isSameNode(event.target) ||
                        this.appTopbar.topbarMenuButton.nativeElement.contains(event.target)
                    );

                    if (isOutsideClicked) {
                        this.hideProfileMenu();
                    }
                });
            }

            if (this.layoutService.state.staticMenuMobileActive) {
                this.blockBodyScroll();
            }
        });

        this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
            this.hideMenu();
            this.hideProfileMenu();
        });
    }
    ngOnInit(): void {
        console.log('');
        // this.changeTheme('vela-blue', 'dark');
    }
    changeTheme(theme: string, colorScheme: string) {
        const themeLink = <HTMLLinkElement>document.getElementById('theme-css');
        const newHref = themeLink.getAttribute('href')!.replace(this.layoutService.config.theme, theme);
        this.layoutService.config.colorScheme;
        this.replaceThemeLink(newHref, () => {
            this.layoutService.config.theme = theme;
            this.layoutService.config.colorScheme = colorScheme;
            this.layoutService.onConfigUpdate();
        });
    }
    replaceThemeLink(href: string, onComplete: Function) {
        const id = 'theme-css';
        const themeLink = <HTMLLinkElement>document.getElementById('theme-css');
        const cloneLinkElement = <HTMLLinkElement>themeLink.cloneNode(true);

        cloneLinkElement.setAttribute('href', href);
        cloneLinkElement.setAttribute('id', id + '-clone');

        themeLink.parentNode!.insertBefore(cloneLinkElement, themeLink.nextSibling);

        cloneLinkElement.addEventListener('load', () => {
            themeLink.remove();
            cloneLinkElement.setAttribute('id', id);
            onComplete();
        });
    }

    hideMenu() {
        this.layoutService.state.overlayMenuActive = false;
        this.layoutService.state.staticMenuMobileActive = false;
        this.layoutService.state.menuHoverActive = false;
        if (this.menuOutsideClickListener) {
            this.menuOutsideClickListener();
            this.menuOutsideClickListener = null;
        }
        this.unblockBodyScroll();
    }

    hideProfileMenu() {
        this.layoutService.state.profileSidebarVisible = false;
        if (this.profileMenuOutsideClickListener) {
            this.profileMenuOutsideClickListener();
            this.profileMenuOutsideClickListener = null;
        }
    }

    blockBodyScroll(): void {
        if (document.body.classList) {
            document.body.classList.add('blocked-scroll');
        } else {
            document.body.className += ' blocked-scroll';
        }
    }

    unblockBodyScroll(): void {
        if (document.body.classList) {
            document.body.classList.remove('blocked-scroll');
        } else {
            document.body.className = document.body.className.replace(
                new RegExp('(^|\\b)' + 'blocked-scroll'.split(' ').join('|') + '(\\b|$)', 'gi'),
                ' '
            );
        }
    }

    get containerClass() {
        return 'layout-theme-dark';
        // return {
        //     'layout-theme-light': this.layoutService.config.colorScheme === 'light',
        //     'layout-theme-dark': this.layoutService.config.colorScheme === 'dark',
        //     'layout-overlay': this.layoutService.config.menuMode === 'overlay',
        //     'layout-static': this.layoutService.config.menuMode === 'static',
        //     'layout-static-inactive':
        //         this.layoutService.state.staticMenuDesktopInactive && this.layoutService.config.menuMode === 'static',
        //     'layout-overlay-active': this.layoutService.state.overlayMenuActive,
        //     'layout-mobile-active': this.layoutService.state.staticMenuMobileActive,
        //     'p-input-filled': this.layoutService.config.inputStyle === 'filled',
        //     'p-ripple-disabled': !this.layoutService.config.ripple,
        // };
    }

    ngOnDestroy() {
        if (this.overlayMenuOpenSubscription) {
            this.overlayMenuOpenSubscription.unsubscribe();
        }

        if (this.menuOutsideClickListener) {
            this.menuOutsideClickListener();
        }
    }
}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { AgentCreateProfileComponent } from './agent-create-profile/agent-create-profile.component';
import { CardComparatorComponent } from './comparator/card-comparator/card-comparator.component';
import { ComparatorComponent } from './comparator/comparator.component';
import { FooterDialogComponent } from './footer-dialog/footer-dialog.component';
import { IconTextComponent } from './icon-text/icon-text.component';

@NgModule({
    declarations: [
        FooterDialogComponent,
        ComparatorComponent,
        CardComparatorComponent,
        IconTextComponent,
        AgentCreateProfileComponent,
    ],
    imports: [CommonModule, ButtonModule, RouterModule],
    exports: [FooterDialogComponent, IconTextComponent, AgentCreateProfileComponent, ComparatorComponent],
})
export class SharedModule {}

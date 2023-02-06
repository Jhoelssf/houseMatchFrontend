import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FooterDialogComponent } from './footer-dialog/footer-dialog.component';

@NgModule({
    declarations: [FooterDialogComponent],
    imports: [CommonModule, ButtonModule],
    exports: [FooterDialogComponent],
})
export class SharedModule {}

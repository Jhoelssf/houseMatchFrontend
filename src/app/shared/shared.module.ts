import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { FooterDialogComponent } from './footer-dialog/footer-dialog.component';
import { OneFileSelectComponent } from './one-file-select/one-file-select.component';

@NgModule({
    declarations: [FooterDialogComponent, OneFileSelectComponent],
    imports: [CommonModule, ButtonModule, FormsModule, FileUploadModule],
    exports: [FooterDialogComponent, OneFileSelectComponent],
})
export class SharedModule {}

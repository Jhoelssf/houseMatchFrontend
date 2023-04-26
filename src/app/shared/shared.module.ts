import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { FileUploadModule } from 'primeng/fileupload';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { EmptyListComponent } from './empty-list/empty-list.component';
import { FooterDialogComponent } from './footer-dialog/footer-dialog.component';
import { OneFileSelectComponent } from './one-file-select/one-file-select.component';
import { RegisterUserFormComponent } from './register-user-form/register-user-form.component';

@NgModule({
    declarations: [FooterDialogComponent, OneFileSelectComponent, EmptyListComponent, RegisterUserFormComponent],
    imports: [
        CommonModule,
        ButtonModule,
        FormsModule,
        FileUploadModule,
        CalendarModule,
        ReactiveFormsModule,
        InputTextModule,
        InputNumberModule,
    ],
    exports: [FooterDialogComponent, OneFileSelectComponent, EmptyListComponent, RegisterUserFormComponent],
})
export class SharedModule {}

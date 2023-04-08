import { Component, Input } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-one-file-select',
    templateUrl: './one-file-select.component.html',
    styleUrls: ['./one-file-select.component.scss'],
})
export class OneFileSelectComponent {
    @Input() basic: boolean = false;
    uploadedFiles: any[] = [];

    constructor(private messageService: MessageService) {}

    onUpload(event: any) {
        for (const file of event.files) {
            this.uploadedFiles.push(file);
        }

        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    }

    onBasicUpload() {
        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
    }
}

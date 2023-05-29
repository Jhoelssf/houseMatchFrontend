import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-one-file-select',
    templateUrl: './one-file-select.component.html',
    styleUrls: ['./one-file-select.component.scss'],
})
export class OneFileSelectComponent {
    @Input() basic: boolean = false;
    @Input() file: any;
    @Output() fileChange: EventEmitter<any> = new EventEmitter<any>();
    uploadedFiles: any[] = [];

    constructor(private messageService: MessageService) {}

    onUpload(event: any) {
        console.log(event);

        for (const file of event.files) {
            this.file = file;
            this.fileChange.emit(this.file);
            this.uploadedFiles.push(file);
        }

        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    }

    onBasicUpload() {
        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
    }
    onBasicSelect(event: any) {
        if (event?.files?.length > 0) {
            this.file = event.files[0];
            this.fileChange.emit(this.file);
        }
    }
}

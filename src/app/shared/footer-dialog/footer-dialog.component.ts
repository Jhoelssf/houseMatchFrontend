import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-footer-dialog',
    templateUrl: './footer-dialog.component.html',
    styleUrls: ['./footer-dialog.component.scss'],
})
export class FooterDialogComponent {
    @Input() textPrimaryButton: string = 'Guardar';
    @Input() textSecondaryButton: string = 'Cancelar';
    @Input() iconPrimaryButton: string = 'pi-save';
    @Input() iconSecondaryButton: string = 'pi-times-circle';
    @Output() clickPrimaryButton: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() clickSecondaryButton: EventEmitter<boolean> = new EventEmitter<boolean>();
    constructor() {}

    onClickPrimaryButton(): void {
        this.clickPrimaryButton.emit(true);
    }
    onClickSecondaryButton(): void {
        this.clickSecondaryButton.emit(true);
    }
}

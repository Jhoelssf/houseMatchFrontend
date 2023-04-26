import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from '../../shared/shared.module';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';

@NgModule({
    declarations: [RegisterComponent],
    imports: [CommonModule, RegisterRoutingModule, FormsModule, ReactiveFormsModule, SharedModule, ButtonModule],
})
export class RegisterModule {}

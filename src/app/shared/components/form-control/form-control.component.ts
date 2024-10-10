import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-form-control',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FontAwesomeModule,
    MatTooltipModule,
  ],
  templateUrl: './form-control.component.html',
})
export class FormControlComponent {
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() controlName: string = '';
  @Input() required: boolean = false;
  @Input() form!: FormGroup;
  value: string = '';
  faCircleXMark = faCircleXmark;

  clearInput() {
    this.value = '';
    this.form.get(this.controlName)?.setValue('');
  }
}

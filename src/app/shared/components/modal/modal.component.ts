import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCancel, faClose, faSave } from '@fortawesome/free-solid-svg-icons';
import { SeparatorComponent } from "../separator/separator.component";
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, ReactiveFormsModule, SeparatorComponent, MatTooltipModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  @Input() title: string = "Title";
  @Input() isOpen: boolean = false;
  @Input() formName!:UntypedFormGroup;

  @Output() onClose: EventEmitter<void> = new EventEmitter<void>();
  @Output() onSave: EventEmitter<void> = new EventEmitter<void>();

  closeModal() {
    this.onClose.emit();
  }

  saveData(){
    this.onSave.emit();
  }
  faClose = faClose
  faSave = faSave
  faCancel = faCancel
}

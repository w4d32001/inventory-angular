import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClose, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: 'app-sheet',
  standalone: true,
  imports: [FontAwesomeModule, SidebarComponent],
  templateUrl: './sheet.component.html'
})
export class SheetComponent {
  @Input() isOpen = false
  @Output() isOpenChange = new EventEmitter<boolean>()
  faClose: IconDefinition = faClose

  closeSheet() {
    this.isOpen = false 
    this.isOpenChange.emit(this.isOpen)
  }
}

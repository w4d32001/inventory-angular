import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronDown, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './dropdown.component.html'
})
export class DropdownComponent {
  isOpen = false
  faUser = faUser
  faChevronDown = faChevronDown

  toggleDropdown() {
    this.isOpen = !this.isOpen
  }

  closeDropdown() {
    this.isOpen = false
  }
}

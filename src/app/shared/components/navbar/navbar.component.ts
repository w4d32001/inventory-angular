import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { DropdownComponent } from "../dropdown/dropdown.component";
import { SheetComponent } from "../sheet/sheet.component";
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule, DropdownComponent, SheetComponent],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  faSearch = faSearch
  faBars = faBars

  isOpen = false;

  openSheet(){
    this.isOpen = !this.isOpen
  }

}

import { Component, EventEmitter, Output } from '@angular/core';
import { SidebarRoutesComponent } from '../sidebar-routes/sidebar-routes.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarRoutesComponent, FontAwesomeModule],
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  faCss3 = faCar

  @Output() close = new EventEmitter<void>();

  closeSidebar() {
    this.close.emit();  
  }
}

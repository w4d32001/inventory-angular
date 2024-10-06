import { Component, inject, Input } from '@angular/core';
import { SidebarItem } from './sidebar-item.model';
import { Router, RouterLink } from '@angular/router';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar-item',
  standalone: true,
  imports: [RouterLink, FontAwesomeModule, CommonModule],
  templateUrl: './sidebar-item.component.html'
})
export class SidebarItemComponent {

  @Input() item!: SidebarItem

  private router = inject(Router)

  isActive(): boolean{
    return this.router.url === this.item.href
  }


}

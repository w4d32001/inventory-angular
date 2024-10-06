import { Component } from '@angular/core';
import { dataGeneralSidebar, dataSupportSidebar, dataToolSidebar } from './sidebar-routes.data';
import { SidebarItemComponent } from '../sidebar-item/sidebar-item.component';
import { SidebarItem } from '../sidebar-item/sidebar-item.model';
import { SeparatorComponent } from '../separator/separator.component';

@Component({
  selector: 'app-sidebar-routes',
  standalone: true,
  imports: [SidebarItemComponent, SeparatorComponent],
  templateUrl: './sidebar-routes.component.html'
})
export class SidebarRoutesComponent {

  generalItems = dataGeneralSidebar
  toolItems = dataToolSidebar
  supportItems = dataSupportSidebar
}

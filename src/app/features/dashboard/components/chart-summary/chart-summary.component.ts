import { Component } from '@angular/core';
import { single } from './chart-sumary.data';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chart-summary',
  standalone: true,
  imports: [NgxChartsModule, CommonModule],
  templateUrl: './chart-summary.component.html',
})
export class ChartSummaryComponent {
  
  single: any[] = single;
  view: [number, number] = [500, 400];

  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDougnt: boolean = false;

  colorScheme: string = 'vivid';

  constructor() {}

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}

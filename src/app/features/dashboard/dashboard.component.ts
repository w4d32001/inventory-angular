import { Component, NgModule } from '@angular/core';
import { SheetComponent } from '../../shared/components/sheet/sheet.component';
import { CardSumaryComponent } from './components/card-sumary/card-sumary.component';
import { cardSumary } from './components/card-sumary/card-sumary.model';
import {
  faAddressBook,
  faHeart,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { BrowserModule } from '@angular/platform-browser';
import { ChartSummaryComponent } from "./components/chart-summary/chart-summary.component";
import { LineChartSummaryComponent } from "./components/line-chart-summary/line-chart-summary.component";
import { TableComponent } from "../../shared/components/table/table.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardSumaryComponent, ChartSummaryComponent, LineChartSummaryComponent, TableComponent],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  dataCardsSumary: cardSumary[] = [
    {
      icon: faHeart,
      total: '100.0',
      bg: 'yellow',
      average: 80,
      title: 'Productos',
      tooltipText: 'Productos',
      averageText: 'Productos vendidos',
    },
    {
      icon: faUser,
      total: '100.0',
      bg: 'green',
      average: 30,
      averageText: 'Usuarios nuevos',
      title: 'Usuarios',
      tooltipText: 'Usuarios',
    },
    {
      icon: faAddressBook,
      total: '100.0',
      bg: 'yellow',
      average: 12,
      averageText: 'Correos nuevos',
      title: 'Correos',
      tooltipText: 'Correos',
    },
  ];

  barChartOptions = {
    responsive: true,
  };

  barChartLabels = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
  ];
  barChartType = 'bar';
  barChartLegend = true;

  barChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Serie A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Serie B' },
  ];
}

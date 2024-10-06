import { Component } from '@angular/core';
import { SheetComponent } from "../../shared/components/sheet/sheet.component";
import { CardSumaryComponent } from "./components/card-sumary/card-sumary.component";
import { cardSumary } from './components/card-sumary/card-sumary.model';
import { faHeart } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SheetComponent, CardSumaryComponent],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  dataCardsSumary: cardSumary[] = [
    {
      icon: faHeart,
      total: "100.0",
      bg: "bg-green-500",
      average: 12,
      title: "Corazon",
      tooltipTexct: "Corazon"
    },
    {
      icon: faHeart,
      total: "100.0",
      bg: "bg-green-500",
      average: 12,
      title: "Corazon",
      tooltipTexct: "Corazon"
    },
    {
      icon: faHeart,
      total: "100.0",
      bg: "bg-green-500",
      average: 12,
      title: "Corazon",
      tooltipTexct: "Corazon"
    }
  ]
}

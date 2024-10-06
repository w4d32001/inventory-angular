import { Component, Input } from '@angular/core';
import { cardSumary } from './card-sumary.model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { faArrowTrendDown, faArrowTrendUp, faArrowUpRightDots } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-sumary',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './card-sumary.component.html'
})
export class CardSumaryComponent {
  @Input() item!: cardSumary
  faArrowTrendDown = faArrowTrendDown
  faArrowTrendUp = faArrowTrendUp
  faArrowUpRightDots = faArrowUpRightDots
  faCircleInfo = faCircleInfo
}

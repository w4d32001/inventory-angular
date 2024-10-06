import { Component, Input } from '@angular/core';
import { cardSumary } from './card-sumary.model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-card-sumary',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './card-sumary.component.html'
})
export class CardSumaryComponent {
  @Input() item!: cardSumary
}

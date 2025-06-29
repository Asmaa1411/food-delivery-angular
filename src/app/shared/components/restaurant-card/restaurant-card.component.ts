import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-restaurant-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.scss']
})
export class RestaurantCardComponent {
  @Input() image!: string;
  @Input() discount!: string;
  @Input() category!: string;
  @Input() name!: string;

  @Input() showButton: boolean = false;
}

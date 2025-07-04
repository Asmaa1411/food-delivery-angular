import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantCardComponent } from '../../../shared/components/restaurant-card/restaurant-card.component';

@Component({
  selector: 'app-restaurant-offers',
  standalone: true,
  imports: [CommonModule, RestaurantCardComponent],
  templateUrl: './restaurant-offers.component.html',
  styleUrls: ['./restaurant-offers.component.scss']
})
export class RestaurantOffersComponent {
  cards = [
    {
      image: 'assets/images/offer1.png',
      discount: '-20%',
      category: 'Burgerna',
      name: 'First Order Discount'
    },
    {
      image: 'assets/images/offer2.png',
      discount: '-30%',
      category: 'Burgerna',
      name: 'Vegan Discount'
    },
    {
      image: 'assets/images/offer3.png',
      discount: '-100%',
      category: 'Burgerna',
      name: 'Free ice Cream Offer'
    }
  ];
}

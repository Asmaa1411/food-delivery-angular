import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantCardComponent } from "../../../../shared/components/restaurant-card/restaurant-card.component";
import { FirebaseService } from '../../../../services/firebase.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-deals-section',
  standalone: true,
  imports: [CommonModule, RouterModule, RestaurantCardComponent],
  templateUrl: './deals-section.component.html',
  styleUrls: ['./deals-section.component.scss']
})


export class DealsSectionComponent {
cards: any[] = [];

  constructor(private TestService: FirebaseService) {}

  ngOnInit(): void {
    this.TestService.getRestaurants().subscribe((data) => {
      this.cards = data;
      console.log(data);
    });
  }  // cards = [
  //   {
  //     image: 'assets/images/deals1.png',
  //     discount: '-40%',
  //     category: 'Restaurant',
  //     name: 'Yum Pizza House'
  //   },
  //   {
  //     image: 'assets/images/deals2.png',
  //     discount: '-20%',
  //     category: 'Restaurant',
  //     name: 'Burger Mania'
  //   },
  //   {
  //     image: 'assets/images/deals1.png',
  //     discount: '100%',
  //     category: 'Restaurant',
  //     name: 'Ice Cream Palace'
  //   }
  // ];
}

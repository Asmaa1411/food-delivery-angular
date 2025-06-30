import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../../shared/components/product-card/product-card.component';
import { FirebaseService } from '../../../services/firebase.service';

@Component({
  selector: 'app-burgers-section',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './burgers-section.component.html',
  styleUrls: ['./burgers-section.component.scss']
})
export class BurgersSectionComponent {
  constructor(private firebaseService: FirebaseService) {}

cards: any[] = [];

ngOnInit(): void {
  this.firebaseService.getProducts().subscribe(data => {
    this.cards = data;
    console.log(data);
  });
}

  // burgers = [
  //   {
  //     name: 'Royal Cheese Burger with extra Fries',
  //     description: '1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks',
  //     price: '23.10',
  //     image: 'assets/images/burger meal.png'
  //   },
  //   {
  //     name: 'The classics for 3',
  //     description: '1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks',
  //     price: '23.10',
  //     image: 'assets/images/burger meal.png'
  //   },
  //   {
  //     name: 'The classics for 3',
  //     description: '1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks',
  //     price: '23.10',
  //     image: 'assets/images/burger meal.png'
  //   },
  //   {
  //     name: 'The classics for 3',
  //     description: '1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks',
  //     price: '23.10',
  //     image: 'assets/images/burger meal.png'
  //   },
  //   {
  //     name: 'The classics for 3',
  //     description: '1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks',
  //     price: '23.10',
  //     image: 'assets/images/burger meal.png'
  //   },
  //   {
  //     name: 'The classics for 3',
  //     description: '1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks',
  //     price: '23.10',
  //     image: 'assets/images/burger meal.png'
  //   },
  // ];
}

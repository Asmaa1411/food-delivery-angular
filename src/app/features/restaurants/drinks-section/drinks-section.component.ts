import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductCardComponent } from '../../../shared/components/product-card/product-card.component';

@Component({
  selector: 'app-drinks-section',
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './drinks-section.component.html',
  styleUrl: './drinks-section.component.scss'
})
export class DrinksSectionComponent {
  drinks = [
    {
      name: 'Royal Cheese Burger with extra Fries',
      description: '1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks',
      price: '23.10',
      image: 'assets/images/Cold drink.png'
    },
    {
      name: 'The classics for 3',
      description: '1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks',
      price: '23.10',
      image: 'assets/images/Cold drink.png'
    },
    {
      name: 'The classics for 3',
      description: '1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks',
      price: '23.10',
      image: 'assets/images/Cold drink.png'
    },
    {
      name: 'The classics for 3',
      description: '1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks',
      price: '23.10',
      image: 'assets/images/Cold drink.png'
    },
    {
      name: 'The classics for 3',
      description: '1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks',
      price: '23.10',
      image: 'assets/images/Cold drink.png'
    },
    {
      name: 'The classics for 3',
      description: '1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks',
      price: '23.10',
      image: 'assets/images/Cold drink.png'
    },
  ];
}

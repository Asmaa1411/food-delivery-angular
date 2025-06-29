import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductCardComponent } from '../../../shared/components/product-card/product-card.component';

@Component({
  selector: 'app-fries-section',
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './fries-section.component.html',
  styleUrl: './fries-section.component.scss'
})
export class FriesSectionComponent {
  fries = [
    {
      name: 'Royal Cheese Burger with extra Fries',
      description: '1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks',
      price: '23.10',
      image: 'assets/images/Fries.png'
    },
    {
      name: 'The classics for 3',
      description: '1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks',
      price: '23.10',
      image: 'assets/images/Fries.png'
    },
    {
      name: 'The classics for 3',
      description: '1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks',
      price: '23.10',
      image: 'assets/images/Fries.png'
    },
    {
      name: 'The classics for 3',
      description: '1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks',
      price: '23.10',
      image: 'assets/images/Fries.png'
    },
    {
      name: 'The classics for 3',
      description: '1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks',
      price: '23.10',
      image: 'assets/images/Fries.png'
    },
    {
      name: 'The classics for 3',
      description: '1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks',
      price: '23.10',
      image: 'assets/images/Fries.png'
    },
  ];
}

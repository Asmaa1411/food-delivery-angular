import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews-section',
  imports: [CommonModule],
  templateUrl: './reviews-section.component.html',
  styleUrl: './reviews-section.component.scss'
})
export class ReviewsSectionComponent {
categories = [
    { image: '../../../../../assets/images/Burgers.png', name: 'Burgers & Fast food', count: 21 },
    { image: '../../../../../assets/images/Salads.png', name: 'Salads', count: 32 },
    { image: '../../../../../assets/images/Pasta.png', name: 'Pasta & Casuals', count: 4 },
    { image: '../../../../../assets/images/Pizza.png', name: 'Pizza', count: 18 },
    { image: '../../../../../assets/images/Breakfast.png', name: 'Breakfast', count: 4 },
    { image: '../../../../../assets/images/Soups.png', name: 'Soups', count: 32 }
  ];

  restaurants = [
    { image: '../../../../../assets/images/Mac.png', name: "McDonald's London" },
    { image: '../../../../../assets/images/Papa.png', name: 'Papa Johns' },
    { image: '../../../../../assets/images/KFC.png', name: 'KFC West London' },
    { image: '../../../../../assets/images/Texas.png', name: 'Texas Chicken' },
    { image: '../../../../../assets/images/Burger King.png', name: 'Burger King' },
    { image: '../../../../../assets/images/Shaurma.png', name: 'Shaurma 1' }
  ];
}

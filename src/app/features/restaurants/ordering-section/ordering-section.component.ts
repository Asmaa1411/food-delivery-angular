import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ordering-section',
  imports: [CommonModule, FormsModule],
  templateUrl: './ordering-section.component.html',
  styleUrls: ['./ordering-section.component.scss'],
  standalone: true
})
export class OrderingSectionComponent {
  @Input() product: any;

  selectedSize: string = '';
  selectedOptions: { [key: string]: string } = {}; // ✅ أهو ده اللي ناقص

  sizes = [
    { label: 'Small', price: 16.8 },
    { label: 'Medium', price: 19.9 },
    { label: 'Large', price: 23.1 },
  ];

  options = [
    {
      label: 'Vegetables',
      choices: ['Lettuce', 'Tomato', 'Pickles', 'Onions'],
    },
    {
      label: 'Cheese Sauce',
      choices: ['Cheddar', 'Swiss', 'No Cheese'],
    },
    {
      label: 'Fries',
      choices: ['Regular', 'Spicy'],
    },
    {
      label: 'Drink',
      choices: ['Pepsi', 'Diet Pepsi', '7up'],
    },
  ];

  get selectedPrice(): number {
    return this.sizes.find(s => s.label === this.selectedSize)?.price || 0;
  }

  get totalPrice(): number {
    return this.selectedPrice + 2.5 - 3;
  }


  confirmOrder() {
    alert('Your order has been confirmed!');
  }
}
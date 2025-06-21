import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ لازم نستورده

@Component({
  selector: 'app-deals-section',
  standalone: true,
  imports: [CommonModule], // ✅ نضيفه هنا
  templateUrl: './deals-section.component.html',
  styleUrls: ['./deals-section.component.scss']
})
export class DealsSectionComponent {}

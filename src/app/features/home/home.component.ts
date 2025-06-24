import { Component } from '@angular/core';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { DealsSectionComponent } from "./components/deals-section/deals-section.component";
import { CategoriesSectionComponent } from "./components/categories-section/categories-section.component";
import { AppSectionComponent } from "./components/app-section/app-section.component";
import { FaqSectionComponent } from "./components/faq-section/faq-section.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSectionComponent, DealsSectionComponent, CategoriesSectionComponent, AppSectionComponent, FaqSectionComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}

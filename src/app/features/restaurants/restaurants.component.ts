import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RestaurantBannerComponent } from "./restaurant-banner/restaurant-banner.component";
import { RestaurantOffersComponent } from "./restaurant-offers/restaurant-offers.component";
import { BurgersSectionComponent } from "./burgers-section/burgers-section.component";
import { FriesSectionComponent } from "./fries-section/fries-section.component";
import { DrinksSectionComponent } from "./drinks-section/drinks-section.component";
import { ReviewsSectionComponent } from "./reviews-section/reviews-section.component";
import { InformationComponent } from "./information/information.component";
import { LocationInfoComponent } from "./location-info/location-info.component";

@Component({
  selector: 'app-restaurants',
  standalone: true,
  imports: [CommonModule, RouterModule, RestaurantBannerComponent, RestaurantOffersComponent, BurgersSectionComponent, FriesSectionComponent, DrinksSectionComponent, ReviewsSectionComponent, InformationComponent, LocationInfoComponent],
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {
  restaurants: any[] = [];

  constructor(private http: HttpClient) {}

ngOnInit(): void {
this.http.get<any[]>('https://order-food-api.onrender.com/api/restaurants')
  .subscribe((data) => {
    console.log(data); // شوفه في الكونسول
    this.restaurants = data;
  });

}

}

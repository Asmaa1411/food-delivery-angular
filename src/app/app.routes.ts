import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'menu',
    loadComponent: () => import('./features/menu/menu.component').then(m => m.MenuComponent),
  },
  {
    path: 'offers',
    loadComponent: () => import('./features/offers/offers.component').then(m => m.OffersComponent),
  },
  {
    path: 'restaurants',
    loadComponent: () => import('./features/restaurants/restaurants.component').then(m => m.RestaurantsComponent),
  },
  {
    path: 'track',
    loadComponent: () => import('./features/track/track.component').then(m => m.TrackComponent),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

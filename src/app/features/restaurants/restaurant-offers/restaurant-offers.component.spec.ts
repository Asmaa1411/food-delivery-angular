import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantOffersComponent } from './restaurant-offers.component';

describe('RestaurantOffersComponent', () => {
  let component: RestaurantOffersComponent;
  let fixture: ComponentFixture<RestaurantOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantOffersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

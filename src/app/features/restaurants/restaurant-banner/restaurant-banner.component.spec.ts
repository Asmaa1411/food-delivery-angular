import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantBannerComponent } from './restaurant-banner.component';

describe('RestaurantBannerComponent', () => {
  let component: RestaurantBannerComponent;
  let fixture: ComponentFixture<RestaurantBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

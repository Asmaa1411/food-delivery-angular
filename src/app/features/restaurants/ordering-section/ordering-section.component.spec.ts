import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderingSectionComponent } from './ordering-section.component';

describe('OrderingSectionComponent', () => {
  let component: OrderingSectionComponent;
  let fixture: ComponentFixture<OrderingSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderingSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

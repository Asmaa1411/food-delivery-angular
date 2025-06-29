import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinksSectionComponent } from './drinks-section.component';

describe('DrinksSectionComponent', () => {
  let component: DrinksSectionComponent;
  let fixture: ComponentFixture<DrinksSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrinksSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrinksSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

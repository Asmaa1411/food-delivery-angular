import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriesSectionComponent } from './fries-section.component';

describe('FriesSectionComponent', () => {
  let component: FriesSectionComponent;
  let fixture: ComponentFixture<FriesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FriesSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FriesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

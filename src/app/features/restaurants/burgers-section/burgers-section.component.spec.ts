import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgersSectionComponent } from './burgers-section.component';

describe('BurgersSectionComponent', () => {
  let component: BurgersSectionComponent;
  let fixture: ComponentFixture<BurgersSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BurgersSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurgersSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

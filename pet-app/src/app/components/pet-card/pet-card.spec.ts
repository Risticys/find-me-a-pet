import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetCardComponent } from './pet-card';

describe('PetCard', () => {
  let component: PetCard;
  let fixture: ComponentFixture<PetCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetCard],
    }).compileComponents();

    fixture = TestBed.createComponent(PetCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

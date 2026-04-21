import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetCardComponent} from '../pet-card/pet-card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PetCardComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class HomeComponent {
 pets = [
  {
    id: 1,
    name: 'Max',
    type: 'Dog',
    age: 2,

    energyLevel: 'High',
    spaceNeed: 'Large',
    careLevel: 'Medium',

    goodWithKids: true,
    goodWithPets: false,

    description: 'Very active and playful dog',
    imageUrl: 'https://placedog.net/400/300'
  },
  {
    id: 2,
    name: 'Luna',
    type: 'Cat',
    age: 1,

    energyLevel: 'Low',
    spaceNeed: 'Small',
    careLevel: 'Easy',

    goodWithKids: true,
    goodWithPets: true,

    description: 'Calm indoor cat',
    imageUrl: 'https://placedog.net/401/302'
  },
  {
    id: 3,
    name: 'Rocky',
    type: 'Dog',
    age: 4,

    energyLevel: 'Medium',
    spaceNeed: 'Medium',
    careLevel: 'Medium',

    goodWithKids: false,
    goodWithPets: true,

    description: 'Friendly and balanced dog',
    imageUrl: 'https://placedog.net/401/300'
  }
];
}
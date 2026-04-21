import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pet-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pet-card.html',
  styleUrls: ['./pet-card.css']
})
export class PetCardComponent {
  @Input() pet: any; // ✅ REQUIRED
}
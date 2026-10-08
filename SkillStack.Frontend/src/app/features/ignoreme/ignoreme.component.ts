import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ignoreme',
  standalone: true,
  imports: [],
  templateUrl: './ignoreme.component.html',
  styleUrl: './ignoreme.component.scss'
})
export class IgnoreMeComponent {
  constructor() {
    localStorage.setItem('ignore-tracking', '1'); 
  }
}

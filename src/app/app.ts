import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'todo-app';
  items = [
    { description: 'Wake up', action: 'No' },
    { description: 'Sport', action: 'No' },
    { description: 'Breakfast', action: 'No' },
    { description: 'Sleep', action: 'No' },
  ];
}

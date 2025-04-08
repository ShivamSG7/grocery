import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer>
      <div class="container">
        <p>&copy; 2023 Grocery Store. All rights reserved.</p>
      </div>
    </footer>
  `,
  styles: [`
    footer {
      background-color: #333;
      color: white;
      padding: 1rem 0;
      text-align: center;
    }
  `]
})
export class FooterComponent {}

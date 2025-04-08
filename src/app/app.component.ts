import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <div class="container">
      <app-product-list></app-product-list>
    </div>
    <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {
  title = 'grocery-website';
}

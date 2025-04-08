import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <div class="container">
        <h1>Grocery Store</h1>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `,
  styles: [`
    header {
      background-color: #4CAF50;
      color: white;
      padding: 1rem 0;
    }
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    h1 {
      margin: 0;
    }
    nav ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
      display: flex;
    }
    nav ul li {
      margin-left: 1rem;
    }
    nav ul li a {
      color: white;
      text-decoration: none;
    }
  `]
})
export class HeaderComponent {}

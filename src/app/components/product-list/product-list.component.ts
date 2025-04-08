import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  template: `
    <h2>Our Products</h2>
    <div class="product-grid">
      <div *ngFor="let product of products" class="product-card">
        <h3>{{ product.name }}</h3>
        <p>{{ product.price | currency }}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  `,
  styles: [`
    .product-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 1rem;
    }
    .product-card {
      border: 1px solid #ddd;
      padding: 1rem;
      text-align: center;
    }
    button {
      background-color: #4CAF50;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      cursor: pointer;
    }
  `]
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }
}

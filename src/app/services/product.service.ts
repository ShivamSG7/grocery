import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = [
    { id: 1, name: 'Apples', price: 1.99 },
    { id: 2, name: 'Bananas', price: 0.99 },
    { id: 3, name: 'Milk', price: 2.49 },
    { id: 4, name: 'Bread', price: 2.99 },
    { id: 5, name: 'Eggs', price: 3.49 },
    { id: 6, name: 'Cheese', price: 4.99 },
  ];

  getProducts() {
    return this.products;
  }
}

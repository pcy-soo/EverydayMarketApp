import { Component } from '@angular/core';
import { Category } from './category.interface';
@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent {
  categories = [
    { name: 'Shoes' },
    { name: 'Tops' },
    { name: 'Accessories' },
    { name: 'Dresses' },
    { name: 'Bottoms' },
    { name: 'Skirts' },
    { name: 'Outwear' }
  ];
  
}



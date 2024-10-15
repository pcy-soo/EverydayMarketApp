import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../products-page/category.interface';  


@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrl: './category-menu.component.css'
})
export class CategoryMenuComponent {
  @Input() categories: Category[] = [];
  @Output() categorySelected = new EventEmitter<Category>();

  onCategorySelected(category: Category) {
    alert(`Category selected: ${category.name}`);
    this.categorySelected.emit(category);
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../products-page/category.interface'; 


@Component({
  selector: 'app-category-menu-item',
  templateUrl: './category-menu-item.component.html',
  styleUrl: './category-menu-item.component.css'
})
export class CategoryMenuItemComponent {
  @Input() category!: Category; 
  @Output() categorySelected = new EventEmitter<Category>();

  onClick() {
    this.categorySelected.emit(this.category); 
  }
}

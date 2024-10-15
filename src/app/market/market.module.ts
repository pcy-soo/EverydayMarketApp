import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsPageComponent } from './products-page/products-page.component';
import { CategoryMenuComponent } from './category-menu/category-menu.component';
import { CategoryMenuItemComponent } from './category-menu-item/category-menu-item.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductFormComponent } from './product-form/product-form.component';



@NgModule({
  declarations: [
    ProductsPageComponent,
    CategoryMenuComponent,
    CategoryMenuItemComponent,
    ProductListComponent,
    ProductCardComponent,
    ProductFormComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CategoryMenuComponent, 
    CategoryMenuItemComponent,
    ProductsPageComponent
  ]
})
export class MarketModule { }

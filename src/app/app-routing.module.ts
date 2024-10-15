import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPageComponent } from './market/products-page/products-page.component';
import { RegisterPageComponent } from './core/register-page/register-page.component'; 


const routes: Routes = [
  { path: 'register', component: RegisterPageComponent },
  { path: 'products', component: ProductsPageComponent },
  { path: '', redirectTo: 'register', pathMatch: 'full' },  
  { path: '**', redirectTo: 'register', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MarketModule } from './market/market.module';
import { HeaderComponent } from './shared/header/header.component';
import { RegisterPageComponent } from './core/register-page/register-page.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPageComponent } from './market/products-page/products-page.component';
import { ValidatorDirective } from './core/register-page/validators/validator.directive';




const routes: Routes = [
  { path: 'register', component: RegisterPageComponent }, 
  { path: 'products', component: ProductsPageComponent }, 
  { path: '', redirectTo: '/register', pathMatch: 'full' } 
];
@NgModule({
  declarations: [
    AppComponent,
    RegisterPageComponent,
    ValidatorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MarketModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

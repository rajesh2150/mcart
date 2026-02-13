import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './navbar/navbar';
import { Home } from './home/home';
import { Cart } from './cart/cart';
import { Product } from './product/product';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Addproduct } from './addproduct/addproduct';
import { ProductDetailsComponent } from './product-details-component/product-details-component';
import { Mcart } from './mcart/mcart';

@NgModule({
  declarations: [
    App,
    Navbar,
    Home,
    Cart,
    Product,
    Addproduct,
    ProductDetailsComponent,
    Mcart
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }

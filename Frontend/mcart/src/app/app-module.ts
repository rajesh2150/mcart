import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './navbar/navbar';
import { Home } from './home/home';
import { Cart } from './cart/cart';

import { FormsModule } from '@angular/forms';

import { Product } from './product/product';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Addproduct } from './addproduct/addproduct';


@NgModule({
  declarations: [
    App,
    Navbar,
    Home,
    Cart,
    Product,
    Addproduct
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
